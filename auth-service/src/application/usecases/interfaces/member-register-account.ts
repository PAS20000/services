import { EmailServiceResponseApplicationModel, MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface RegisterRequest extends MemberReponseApplicationModel {
    repository : MemberRepositoryResponseApplicationModel
    emailService : EmailServiceResponseApplicationModel
}

type RegisterResponse = void

export {
    RegisterRequest,
    RegisterResponse
}

