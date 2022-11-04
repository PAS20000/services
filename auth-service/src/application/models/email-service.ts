interface EmailServiceSendRequestApplicationModel {
    sender ?: string
    reason : string
    recipient : string
    message : string
    important ?: boolean
}

interface EmailServiceResponseApplicationModel {
   Send(props : EmailServiceSendRequestApplicationModel) : Promise<void>
}

export {
    EmailServiceResponseApplicationModel,
    EmailServiceSendRequestApplicationModel
}