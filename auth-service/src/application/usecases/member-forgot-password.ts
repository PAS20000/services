import EmailMessages from "../../domain/entities/email-messages/email-messages"
import MemberNotFound from "../errors/member-not-found"
import { CreateForgotPassWord } from "./interfaces/member-forgot-password"

const ForgotPassword : CreateForgotPassWord = async ({ 
    email,
    access_token,
    nickname,
    name,
    emailService, 
    repository
}) => {
    const member = await repository.findByEmail(email)
    
    if (member) {
        await emailService.Send(EmailMessages({ 
            email, 
            nickname, 
            name, 
            token : access_token 
        }).ForgotPassword())
    } else {
      throw new MemberNotFound()
    }
}

export default ForgotPassword