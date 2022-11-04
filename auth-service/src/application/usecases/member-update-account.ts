import bcrypt from 'bcrypt'
import Member from '../../domain/entities/member/member'
import MemberInvalidPassword from '../errors/member-invalid-password'
import MemberNotFound from '../errors/member-not-found'
import { UpdateRequest, UpdateResponse } from './interfaces/member-update-account'

const Update = async ({
    id,
    password,
    repository,
    newMember,
    token
} : UpdateRequest) : Promise<UpdateResponse> => {
    const currentMember = await repository.findById(id)

    if (currentMember) {
        const hash = currentMember.password
        const compare = await bcrypt.compare(password.value, hash)

        if (compare) {

            const MemberUpdateModel = await Member({
               ...currentMember,
               ...newMember,
               password : {
                 value : newMember.password ?? password.value,
                 hash : !newMember.password ? currentMember.password : undefined
               },
               updatedAt : new Date(),
               createdAt : new Date(currentMember.createdAt)
            })

            const UpdatedMember = await repository.update(MemberUpdateModel)
    
            return UpdatedMember
        } else {
            throw new MemberInvalidPassword()
        }
       
    } else {
        throw new MemberNotFound()
    }
}

export default Update