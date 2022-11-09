import { MemberResponse } from "../../domain/entities/member/interfaces/member"

interface MemberInRepositoryApplicationModel extends Omit<MemberResponse , 'password' | 'access_token'> {
    password : string
}

type MemberReponseApplicationModel = MemberResponse

interface MemberRepositoryResponseApplicationModel<T = MemberInRepositoryApplicationModel> {
    findById(id : string) : Promise<T | null>
    findByEmail(email : string) : Promise<T | null>
    delete(id : string) : Promise<void>
    insert(member : MemberResponse) : Promise<void>
    update(newMember : MemberResponse) : Promise<T>
}

type CreateMemberRepositoryApplicationModel = (req : MemberRepositoryResponseApplicationModel) => MemberInRepositoryApplicationModel

export {
    MemberRepositoryResponseApplicationModel,
    MemberInRepositoryApplicationModel,
    MemberReponseApplicationModel,
    CreateMemberRepositoryApplicationModel
}