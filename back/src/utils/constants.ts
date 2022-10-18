import dotenv from 'dotenv'
dotenv.config()

export const port: string | undefined = process.env.PORT
export const db: string = process.env.DB || ''
export const secretKey: string = process.env.SECRET_KEY || ''
export const baseUrl: string = process.env.BASE_URL || ''
export const emailPassword: string = process.env.EMAIL_PASSWORD || ''
export const emailApi: string = process.env.EMAIL_API || ''
export const audienceId: string = process.env.AUDIENCE_ID_MAILCHIMP || ''
export const apiKey: string = process.env.API_KEY_MAILCHIMP || ''
