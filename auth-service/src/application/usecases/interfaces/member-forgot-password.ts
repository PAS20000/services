import { EmailServiceResponseApplicationModel, MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface ForgotPasswordRequest extends MemberReponseApplicationModel {
    emailService : EmailServiceResponseApplicationModel
    repository : MemberRepositoryResponseApplicationModel
}

type ForgotPasswordResponse = void

export {
    ForgotPasswordRequest,
    ForgotPasswordResponse
}