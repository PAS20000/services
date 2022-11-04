import {  MemberRepositoryResponseInfraModel } from "../models/member-repository"
import { InsertMemberDataInDynamoDb, MemberInDynamoDbDataModel, MemberDataInDynamoDbResponseFinds } from "./dynamodb/interfaces/member-dynamodb"

const MemberInMemoryRepository = (
    items = [] as MemberInDynamoDbDataModel []
) : MemberRepositoryResponseInfraModel => {

    return {
        async findByEmail(email) {
            const member = items.filter(mb => mb.email === email)[0]
            if (member) {
                return MemberDataInDynamoDbResponseFinds(member)
            } else {
                return null
            }
        },
        async findById(id) {
            const member = items.filter(mb => mb.id === id)[0]
            if (member) {
                return MemberDataInDynamoDbResponseFinds(member)
            } else {
                return null
            }
        },
        async delete(id) {
            items.filter(mb => mb.id !== id)
        },
        async insert(member) {
            items.push(InsertMemberDataInDynamoDb(member))
        },
        async update(newMember) {
            return MemberDataInDynamoDbResponseFinds({
                ...newMember,
                password : newMember.password.hash,
                createdAt : newMember.createdAt.toISOString(),
                updatedAt : newMember.updatedAt.toISOString(),
            })
        },
    }
}

export default MemberInMemoryRepository