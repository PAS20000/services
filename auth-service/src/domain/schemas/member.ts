import joi from 'joi'
import { MemberResponse } from '../entities/member/interfaces/member'

const MemberSchema = joi.object<MemberResponse>({
    id : joi.string().required(),
    name : joi.string().min(3).max(24).required(),
    email : joi.string().email().required(),
    password : {
        value :  joi.string().min(3).max(24).required(),
        hash :   joi.string().required()
    },
    nickname : joi.string().min(3).max(24).required(),
    signature : joi.string().min(3).max(24),
    secrets : joi.array().required(),
    verified : {
        email : joi.boolean().required()
    },
    createdAt : joi.date().required(),
    updatedAt : joi.date().required(),
    access_token : joi.string().required(),
    refresh_token : joi.string().required(),
})

export default MemberSchema