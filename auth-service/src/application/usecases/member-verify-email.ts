import MemberNotFound from "../errors/member-not-found"
import { VerifyEmailRequest, VerifyEmailResponse } from "./interfaces/member-verify-email"

const VerifyEmail = async ({ 
    createdAt,
    email,
    id,
    name,
    nickname,
    password,
    secrets,
    signature,
    token,
    updatedAt,
    verified,
    repository 
} : VerifyEmailRequest) : Promise<VerifyEmailResponse> => {
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
            token,
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