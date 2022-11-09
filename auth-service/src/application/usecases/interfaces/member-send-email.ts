import { EmailServiceResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface SendEmailRequest extends MemberReponseApplicationModel {
    reason : string
    message : string
    emailService : EmailServiceResponseApplicationModel
}

type SendEmailResponse =  Promise<void>

type CreateSendEmail = (req : SendEmailRequest) => SendEmailResponse

export {
    SendEmailRequest,
    SendEmailResponse,
    CreateSendEmail
}