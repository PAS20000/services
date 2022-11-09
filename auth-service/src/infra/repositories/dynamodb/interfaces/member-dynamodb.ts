import { MemberResponseInfraModel, MemberInRepositoryInfraModel } from "../../../models/member-repository";


interface MemberInDynamoDbDataModel extends Omit<MemberInRepositoryInfraModel, 'updatedAt' | 'createdAt'> {
    createdAt : string
    updatedAt : string
}

const InsertMemberDataInDynamoDb = ({ 
 createdAt, 
 email,
 id,
 name,
 nickname,
 refresh_token,
 password,
 secrets,
 signature,
 updatedAt,
 verified,
 avatar
} : MemberResponseInfraModel) : MemberInDynamoDbDataModel => {

    return {
        id,
        email,
        name,
        nickname,
        password : password.hash,
        secrets,
        signature,
        updatedAt : updatedAt.toISOString(),
        createdAt : createdAt.toISOString(),
        verified,
        refresh_token,
        avatar
    }
}


const MemberDataInDynamoDbResponseFinds = (req : MemberInDynamoDbDataModel) : MemberInRepositoryInfraModel => {

    return  {
        createdAt : new Date(req.createdAt),
        updatedAt : new Date(req.updatedAt),
        email : req.email,
        id : req.id,
        name : req.name,
        nickname : req.nickname,
        password : req.password,
        secrets : req.secrets,
        signature : req.signature,
        verified : req.verified,
        refresh_token : req.refresh_token,
        avatar : ''
    }
}

export {
    MemberInDynamoDbDataModel,
    InsertMemberDataInDynamoDb,
    MemberDataInDynamoDbResponseFinds
}