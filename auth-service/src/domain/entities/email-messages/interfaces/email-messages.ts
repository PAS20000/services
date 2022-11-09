interface EmailMessagesResquet {
    email : string
    nickname : string 
    name : string 
    token : string
}

type MethodsReturn = {
    recipient: string;
    reason: string;
    important: boolean;
    message: string;
}

interface EmailMessagesResponse {
    ThanksForSubscribe() : MethodsReturn
    ForgotPassword() : MethodsReturn
}

type CreateEmailMessages = (req : EmailMessagesResquet) => EmailMessagesResponse

export {
    EmailMessagesResquet,
    CreateEmailMessages,
    EmailMessagesResponse
}