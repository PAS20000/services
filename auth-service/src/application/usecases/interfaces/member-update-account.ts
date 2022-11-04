import { FieldsVerfied, Signature } from "../../../domain/entities/member/interfaces/member"
import { MemberRepositoryResponseApplicationModel, MemberReponseApplicationModel, MemberInRepositoryApplicationModel } from "../../models"

type NewMember =  {
    id ?: string
    email ?: string
    password ?: string
    name ?: string
    nickname ?: string
    signature ?: Signature
    secrets ?: string[]
    verified ?: FieldsVerfied
    createdAt ?: Date
    updatedAt ?: Date
}

interface UpdateRequest extends MemberReponseApplicationModel {
    newMember : NewMember
    repository : MemberRepositoryResponseApplicationModel
}

interface UpdateResponse extends MemberInRepositoryApplicationModel {}

export {
    UpdateRequest,
    UpdateResponse,
    NewMember
}