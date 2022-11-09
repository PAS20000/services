import crypto from 'crypto'
import MemberValidator from '../../validators/member'
import { CreateMember, MemberRequest, MemberResponse } from './interfaces/member'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../../utils/config'

const Member : CreateMember = async (props) => {
    
    const FieldsOptions = {
        ...props,
        password : {
            value : props.password.value,
            hash : props.password.hash ?? await bcrypt.hash(props.password.value, 12)
        },
        id : props.id ?? crypto.randomUUID(),
        createdAt : props.createdAt ?? new Date(),
        updatedAt : props.updatedAt ?? new Date(),
        secrets : props.secrets ?? [crypto.randomUUID()],
        verified : {
            email : false
        }
    } as MemberRequest 

    const MemberModel = {
        ...FieldsOptions,
        access_token : jwt.sign({
            ...FieldsOptions,
            password : undefined,
            secrets : undefined,
        }, 
            config.JWT_SECRET, {
            expiresIn : '7d'
        }),
        refresh_token : jwt.sign({ id : FieldsOptions.id }, 
            config.JWT_SECRET, {
            expiresIn : '365d'
        }), 
    } as MemberResponse
   
    const member = MemberValidator(MemberModel)
   
    return Object.freeze(member)
}

export default Member