import { MemberReponseApplicationModel, MemberRepositoryResponseApplicationModel } from "../../models"

interface SignInWithGoogleRequest extends MemberReponseApplicationModel {
    code ?: string
    repository : MemberRepositoryResponseApplicationModel
}

type SignInWithGoogleResponse = string

interface GoogleUser {
    sub : string
    email : string
    name : string
    picture : string
    family_name : string
    given_name : string
}


export {
    SignInWithGoogleRequest,
    SignInWithGoogleResponse,
    GoogleUser
}