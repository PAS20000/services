import { MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface VerifyEmailRequest extends MemberReponseApplicationModel {
    repository : MemberRepositoryResponseApplicationModel
} 

interface VerifyEmailResponse {
    status : boolean
}

type CreateVerifyEmail = (req : VerifyEmailRequest) => Promise<VerifyEmailResponse>

export {
    VerifyEmailRequest,
    VerifyEmailResponse,
    CreateVerifyEmail
}