import bcrypt from 'bcrypt'
import MemberInvalidPassword from '../errors/member-invalid-password'
import MemberNotFound from '../errors/member-not-found'
import { CreateAuth } from './interfaces'

const Auth : CreateAuth = async ({
    email,
    password,
    access_token,
    refresh_token,
    repository
}) => {
    const member = await repository.findByEmail(email)
    
    if (member) {
        const hash = member.password
        const compare = await bcrypt.compare(password.value, hash)
    
        if (compare) {
            return {
                access_token,
                refresh_token
            }
        } else {
            throw new MemberInvalidPassword()
        }
    } else {
        throw new MemberNotFound()
    }
}

export default Auth