import MemberNotFound from "../errors/member-not-found"
import { CreateVerifyEmail } from "./interfaces/member-verify-email"

const VerifyEmail : CreateVerifyEmail = async ({ 
    createdAt,
    email,
    id,
    name,
    nickname,
    password,
    secrets,
    signature,
    updatedAt,
    verified,
    access_token,
    refresh_token,
    avatar,
    repository ,
}) => {
    const member = await repository.findByEmail(email)

    if (member) {
        await repository.update({
            createdAt,
            email,
            id,
            name,
            nickname,
            password,
            secrets,
            signature,
            avatar,
            access_token,
            refresh_token,
            updatedAt,
            verified : {
                ...verified,
                email : true
            },
        })
        
        return {
            status : true
        }
    } else {
        throw new MemberNotFound()
    }
}

export default VerifyEmail