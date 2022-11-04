import { NewMember } from "../../application/usecases/interfaces"
import Auth from "../../application/usecases/member-auth"
import Delete from "../../application/usecases/member-delete-account"
import ForgotPassword from "../../application/usecases/member-forgot-password"
import Register from "../../application/usecases/member-register-account"
import SendEmail from "../../application/usecases/member-send-email"
import SignInWithGoogle from "../../application/usecases/member-sign-in-with-google"
import Update from "../../application/usecases/member-update-account"
import { MemberRequest } from "../../domain/entities/member/interfaces/member"
import Member from "../../domain/entities/member/member"
import MemberDynamoDb from "../../infra/repositories/dynamodb/member"
import EmailService from "../../infra/services/email"
import { MemberBuildRequest, MemberBuildResponse } from "./interfaces/member-build-interfaces"

const BuildMember = async (req ?: MemberBuildRequest) : Promise<MemberBuildResponse> => {

    const JohnDoe = {
        email : 'pas.dev00@outlook.com',
        name : 'John Doe',
        nickname : 'Doe',
        password : {
            value : '12345'
        },
        signature : 'free',
        verified : {
            email : false
        },
        createdAt : new Date()
    } as MemberRequest

    const schema = await Member({
        ...JohnDoe,
        ...req?.schema
    })

    const repository = req?.repository ?? MemberDynamoDb() 

    const emailService = req?.emailService ?? EmailService()

    return {
        Auth : () => Auth({
            ...schema,
            repository
        }),
        Delete : () => Delete({ 
            ...schema,
            repository
        }),
        ForgotPassword : () => ForgotPassword({
            ...schema,
            repository,
            emailService
        }),
        Register : () => Register({
            ...schema,
            repository,
            emailService
        }),
        SendEmail : ({ message, reason }) => SendEmail({
            ...schema,
            reason,
            message,
            emailService
        }),
        Update : (newMember) => Update({
            ...schema,
            newMember,
            repository
        }),
        SignInWithGoogle : ({ code }) => SignInWithGoogle({ 
            ...schema,
            code,
            repository
        })
    }
}

export default BuildMember