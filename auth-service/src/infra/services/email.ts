import NodeMailer from 'nodemailer'
import config from '../../utils/config'
import { EmailServiceSendResponseInfraModel, EmailServiceSendRequestInfraModel } from '../models'

const EmailService = () : EmailServiceSendResponseInfraModel => {
    const transporter = NodeMailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'imagetrackerassistant@gmail.com',
        pass: config.EMAIL_SECRET
      }
    })

    return {
        async Send({ message, sender, recipient, reason, important } : EmailServiceSendRequestInfraModel) {
            await transporter.sendMail({
                from : sender ?? '💞 Image Tracker <imagetrackerassistant@gmail.com>',
                to : recipient,
                subject : reason,
                html : message,
                priority : important ? 'normal' : 'high'
            })
        }
    }
}

export default EmailService