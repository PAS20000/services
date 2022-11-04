import bcrypt from 'bcrypt'
import MemberInvalidPassword from '../errors/member-invalid-password'
import MemberNotFound from '../errors/member-not-found'
import { DeleteRequest, DeleteResponse } from './interfaces/member-delete-account'

const Delete = async ({
    id,
    password,
    repository
} : DeleteRequest) : Promise<DeleteResponse> => {
    const member = await repository.findById(id)

    if (member) {
        const hash = member.password
        const compare = await bcrypt.compare(password.value, hash)

        if (compare) {
            await repository.delete(member.id as string)
        } else {
            throw new MemberInvalidPassword()
        }
    } else {
        throw new MemberNotFound()
    }
}

export default Delete