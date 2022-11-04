import * as AWS from 'aws-sdk'
import config from '../../../utils/config'
import {  MemberRepositoryResponseInfraModel } from '../../models'
import { InsertMemberDataInDynamoDb, MemberInDynamoDbDataModel, MemberDataInDynamoDbResponseFinds } from './interfaces/member-dynamodb'

const MemberDynamoDb = () : MemberRepositoryResponseInfraModel => {
    const dbClient = new AWS.DynamoDB.DocumentClient({
        "region" : "us-east-1",
        "accessKeyId" : config.AWS_ACCESSKEYID,
        "endpoint" : "http://dynamodb.us-east-1.amazonaws.com",
        "secretAccessKey" : config.AWS_ACCESSKEYID,
    })

    const TableName = 'members'


    return {
        async insert(memberResponse) {
            await dbClient.put({
                Item : InsertMemberDataInDynamoDb(memberResponse),
                TableName,
            }).promise()
         },
         async update(newMember) {
            await dbClient.put({
                Item : InsertMemberDataInDynamoDb(newMember),
                TableName,
            }).promise()
        
            return MemberDataInDynamoDbResponseFinds({
                ...newMember,
                password : newMember.password.hash,
                createdAt : newMember.createdAt.toISOString(),
                updatedAt : newMember.updatedAt.toISOString(),
            })
         },
         async findByEmail(email) {
            const data = await dbClient.scan({
                TableName,
                FilterExpression : 'email = :email',
                ExpressionAttributeValues : {
                    ':email' : email
                }
            }).promise()
            const result = data.Items && data.Items[0] as MemberInDynamoDbDataModel 

            if (result) {
                return MemberDataInDynamoDbResponseFinds(result)
            } else {
                return null
            }
         },
         async findById(id) {
            const data = await dbClient.get({
                TableName,
                Key : {
                    id
                }
            }).promise()

            const result = data.Item && data.Item as MemberInDynamoDbDataModel 

            if (result) {
                return MemberDataInDynamoDbResponseFinds(result)
            } else {
                return null
            }
         },
         async delete(id) {
            await dbClient.delete({
                TableName,
                Key : {
                    id
                }
            }).promise()
         },
    }
}

export default MemberDynamoDb