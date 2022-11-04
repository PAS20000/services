import { MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface AuthRequest extends MemberReponseApplicationModel {
    repository : MemberRepositoryResponseApplicationModel
}

interface AuthResponse {
    access_token : string
    refresh_token : string
}

export {
    AuthRequest,
    AuthResponse
}