import { MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface DeleteRequest extends MemberReponseApplicationModel {
    repository : MemberRepositoryResponseApplicationModel
}

type DeleteResponse = Promise<void>

type CreateDelete = (req : DeleteRequest) => DeleteResponse

export {
    DeleteRequest,
    DeleteResponse,
    CreateDelete
}