type Partner = [
    'name'
][number]

type Signature = [
    'free',
    'gold',
    'diamond',
    'platinum',
    'beta-tester',
    'orichalcum',
    `promo-${Partner}`
][number]

type FieldsVerfied = {
    email : boolean
}

type PasswordRequest = {
    value : string
    hash ?: string
}

type PasswordResponse = {
    value : string
    hash : string
}

interface MemberRequest {
    id ?: string
    email : string
    avatar ?: string
    password : PasswordRequest
    name : string
    nickname : string
    signature : Signature
    secrets ?: string[]
    verified ?: FieldsVerfied
    createdAt ?: Date
    updatedAt ?: Date
    access_token ?: string
    refresh_token ?: string
}

interface MemberResponse {
    id : string
    email : string
    avatar : string
    password : PasswordResponse
    name : string
    nickname : string
    signature : Signature
    secrets : string[]
    verified : FieldsVerfied
    createdAt : Date
    updatedAt : Date
    access_token : string
    refresh_token : string
}


export {
    PasswordRequest,
    PasswordResponse,
    MemberResponse,
    MemberRequest,
    Signature,
    Partner,
    FieldsVerfied,
}