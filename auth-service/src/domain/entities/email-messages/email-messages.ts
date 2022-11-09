import { CreateEmailMessages } from "./interfaces/email-messages"

const EmailMessages : CreateEmailMessages = ({ email, nickname, name, token }) => {

    return {
        ThanksForSubscribe() {
            return {
                recipient :`<${email}>`,
                reason : '🤝Thanks for subscribe, check your email here',
                important : true,
                message : `
                    <div>
                        <h2>
                            Hello <strong style=color:violet;>${name} (${nickname})</strong>, Join our  
                            <a href=https://discord.gg/2kyjbbjBwe style=color:violet;>Discord server</a> or  
                            <a href=https://www.patreon.com/Image_Tracker style=color:violet;>Patreon</a> 
                            to stay up to date with the news, please click the button below 👇 to check your email.
                        </h2>
                        <h2>
                            <a href=https://api.imagetracker.org/member/check?email=${email} style=color:blue;>
                                <img 
                                    src=https://imagetracker.org/media/utils/check-email.png
                                    width=35%
                                    height=auto
                                    style=border-radius:8px;
                                />
                            </a>  
                        </h2>
                        <img 
                            src=https://imagetracker.org/media/utils/banner-patreon.png
                            width=100%
                            height=auto
                            style=border-radius:8px;
                        />
                    </div>
                `
            }
        },
        ForgotPassword() {
            return {
                recipient : `<${email}>`,
                reason : `🔑 Hi ${name}, did you request a password change?`,
                important : true,
                message : `
                    <div>
                        <h2>
                            Hello <strong style=color:violet;>${name} (${nickname})</strong> 
                            we came to know if you requested a <strong>password change</strong>, 
                            click on the button below 👇, if you have not requested disregard this email.
                        </h2>
                        <div>
                            <a href=https://imagetracker.org/forgot?token=${token} style=color:red;>
                                <img 
                                    src=https://imagetracker.org/media/utils/change-password.png
                                    width=35%
                                    height=auto
                                    style=border-radius:8px;
                                />
                            </a>
                        </div>
                        <img 
                            src=https://imagetracker.org/media/utils/banner-patreon.png
                            width=100%
                            height=auto
                            style=border-radius:8px;
                        />
                    </div>
                `,
            }
        }
    }
}

export default EmailMessages