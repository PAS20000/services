import EmailMessages from '../../domain/entities/email-messages/email-messages'
import ExistMemberInDb from '../errors/member-exist-in-db'
import { CreateRegister } from './interfaces/member-register-account'

const Register : CreateRegister = async ({
    email,
    name,
    nickname,
    password,
    signature,
    createdAt,
    id,
    secrets,
    access_token,
    refresh_token,
    updatedAt,
    verified,
    repository,
    emailService
}) => {
    const existMemberinDb = await repository.findByEmail(email)
    
    if (existMemberinDb) {
        throw new ExistMemberInDb()
    } else {
        await repository.insert({
            name,
            nickname,
            password,
            access_token,
            refresh_token,
            signature,
            createdAt,
            id,
            secrets,
            updatedAt,
            email,
            verified,
            avatar : ''
        })
        await emailService.Send(
            EmailMessages({ 
                email, 
                nickname, 
                name, 
                token : access_token 
            }).ThanksForSubscribe()
        )
    }
   
}

export default Register