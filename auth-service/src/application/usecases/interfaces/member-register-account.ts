import { EmailServiceResponseApplicationModel, MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface RegisterRequest extends MemberReponseApplicationModel {
    repository : MemberRepositoryResponseApplicationModel
    emailService : EmailServiceResponseApplicationModel
}

type RegisterResponse = Promise<void>

type CreateRegister = (req : RegisterRequest) => RegisterResponse

export {
    RegisterRequest,
    RegisterResponse,
    CreateRegister
}

