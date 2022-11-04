import dotenv from 'dotenv'

dotenv.config()

const config = {
    JWT_SECRET: process.env.JWT_SECRET as string,
    EMAIL_SECRET: process.env.EMAIL_SECRET as string,
    PATREON_CLIENT_ID: process.env.PATREON_CLIENT_ID as string,
    PATREON_CLIENT_SECRET: process.env.PATREON_CLIENT_SECRET as string,
    PATREON_WEBHOOK_SECRET: process.env.PATREON_WEBHOOK_SECRET as string,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
    AWS_ACCESSKEYID: process.env.AWS_ACCESSKEYID as string,
    AWS_SECRETACCESSKEY: process.env.AWS_SECRETACCESSKEY as string,
}

export default config