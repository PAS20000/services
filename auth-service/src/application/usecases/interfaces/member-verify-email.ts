import { MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface VerifyEmailRequest extends MemberReponseApplicationModel {
    repository : MemberRepositoryResponseApplicationModel
} 

interface VerifyEmailResponse {
    status : boolean
} 

export {
    VerifyEmailRequest,
    VerifyEmailResponse
}