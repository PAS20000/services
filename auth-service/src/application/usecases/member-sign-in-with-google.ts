import { google } from 'googleapis'
import Member from '../../domain/entities/member/member'
import { GoogleApi } from '../../utils/axios'
import config from '../../utils/config'
import { GoogleUser, SignInWithGoogleRequest } from './interfaces'

const GOOGLE_CLIENT_ID = config.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = config.GOOGLE_CLIENT_SECRET
const redirectUri = `https://api.imagetracker.com/oauth/redirect/google`

const SignInWithGoogle = async ({ code, repository } : SignInWithGoogleRequest) => {   
    const oauth2Clients = new google.auth.OAuth2(
        GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET,
        redirectUri
    )

    const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
    
    const authorizationUrl = oauth2Clients.generateAuthUrl({
        access_type : 'offline',
        scope : scopes,
        include_granted_scopes : true,
    })

    if (code) {
        const OauthToken = oauth2Clients.getToken({
            code,
        })
        const { tokens : { access_token } } = await OauthToken
        const { data } = await GoogleApi(access_token).get(`oauth2/v3/userinfo?access_token=${access_token}`)
        const googleUser = {
            email : data.email,
            family_name : data.family_name,
            given_name : data.given_name,
            name : data.name,
            picture : data.picture,
            sub : data.sub
        } as GoogleUser

        const buildMember = await Member({
            id : googleUser.sub,
            email : googleUser.email,
            name : googleUser.name,
            nickname : googleUser.family_name,
            signature : 'free',
            password : {
                value : 'google',
                hash : '$2a$12$oXIuf1EbfeyHfjsd18blWeDDJftUhoBjc/Atjj6F5BWCK2f/TYNfm'
            }
        })
        
        const ExistMemberInDb = await repository.findById(buildMember.id)

        const member = {
            ...buildMember,
            ...ExistMemberInDb
        }

        if (ExistMemberInDb) {
            return member.refresh_token
        } else {
            await repository.insert({
                ...member,
                password : {
                    hash : '',
                    value : ''
                }
            })
            return member.refresh_token
        }       
    }
    else {
        return authorizationUrl
    }
}

export default SignInWithGoogle