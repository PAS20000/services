import { Express } from 'express'

interface RoutesRequest {
    app : Express
    existToken : () => void
}

type EmailAndPassword<T = {}> = {
    email : string
    password : string
} & T

export {
    RoutesRequest,
    EmailAndPassword
}