import { EmailServiceResponseApplicationModel, MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface ForgotPasswordRequest extends MemberReponseApplicationModel {
    emailService : EmailServiceResponseApplicationModel
    repository : MemberRepositoryResponseApplicationModel
}

type ForgotPasswordResponse = Promise<void>

type CreateForgotPassWord = (req : ForgotPasswordRequest) => ForgotPasswordResponse

export {
    ForgotPasswordRequest,
    ForgotPasswordResponse,
    CreateForgotPassWord
}