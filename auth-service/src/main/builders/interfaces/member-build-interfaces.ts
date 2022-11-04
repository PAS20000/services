import { 
    AuthResponse, 
    DeleteResponse, 
    ForgotPasswordResponse, 
    NewMember, 
    RegisterResponse, 
    SendEmailResponse, 
    SignInWithGoogleResponse, 
    UpdateResponse 
} from "../../../application/usecases/interfaces"
import { PasswordRequest, Signature } from "../../../domain/entities/member/interfaces/member"
import { MemberRepositoryResponseInfraModel } from "../../../infra/models"
import { EmailServiceSendResponseInfraModel } from "../../../infra/models/email"

type Schema = {
    id ?: string
    email ?: string
    name ?: string
    nickname ?: string
    password ?: PasswordRequest
    signature ?: Signature
}

interface MemberBuildRequest {
    schema ?: Schema
    emailService ?: EmailServiceSendResponseInfraModel
    repository ?: MemberRepositoryResponseInfraModel
}

type SendEmailRequest = { reason : string, message : string }

interface MemberBuildResponse {
    Auth() : Promise<AuthResponse>
    Delete() : Promise<DeleteResponse>
    ForgotPassword() : Promise<ForgotPasswordResponse>
    Register() : Promise<RegisterResponse> 
    SendEmail(req : SendEmailRequest) : Promise<SendEmailResponse>
    Update(newMember : NewMember) : Promise<UpdateResponse>
    SignInWithGoogle(req : { code ?: string }) : Promise<SignInWithGoogleResponse>
}

export {
    MemberBuildRequest,
    MemberBuildResponse
}