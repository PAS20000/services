import { MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface DeleteRequest extends MemberReponseApplicationModel {
    repository : MemberRepositoryResponseApplicationModel
}

type DeleteResponse = void

export {
    DeleteRequest,
    DeleteResponse
}