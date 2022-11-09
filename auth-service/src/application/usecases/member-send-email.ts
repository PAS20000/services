import { CreateSendEmail } from "./interfaces/member-send-email"

const SendEmail : CreateSendEmail = async ({ 
    name,
    nickname,
    email,
    message, 
    reason, 
    emailService 
}) => {
    await emailService.Send({
        recipient : 'imagetrackerassistant@gmail.com',
        reason,
        message : `
            <h2>name : ${name}(${nickname})</h2>
            <h2>email : ${email}</h2>
            <p>${message}</p>
        `,
    })
}

export default SendEmail