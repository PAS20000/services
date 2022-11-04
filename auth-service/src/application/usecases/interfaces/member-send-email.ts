import { EmailServiceResponseApplicationModel, MemberReponseApplicationModel } from "../../models"

interface SendEmailRequest extends MemberReponseApplicationModel {
    reason : string
    message : string
    emailService : EmailServiceResponseApplicationModel
}

type SendEmailResponse = void

export {
    SendEmailRequest,
    SendEmailResponse
}