import { expect, it, describe } from 'vitest'
import MemberExistInDb from '../../../application/errors/member-exist-in-db'
import { EmailServiceResponseApplicationModel } from '../../../application/models'
import BuildMember from '../../../main/builders/member-build'
import MemberInMemoryRepository from '../../../infra/repositories/member-in-memory'

const repository = MemberInMemoryRepository([
    {
        createdAt : new Date().toISOString(),
        updatedAt : new Date().toISOString(),
        email : 'pas.dev00@outlook.com',
        id : '1',
        name : 'Jonh Doe',
        nickname : 'Doe',
        password : '$2b$12$wyBO71gxAcG20UhhveCkZeOM4shet19yx6rcWVJF92x1iDK0led7e', // 12345 hash
        secrets : ['49-23904829usdv3408h-2934-sdf'],
        signature : 'orichalcum',
        verified : {
            email : false
        },
        refresh_token : ''
    }
])


const MockEmailService = (props ?: any) : EmailServiceResponseApplicationModel => {

    return {
        async Send(props) {}
    }
}

describe('Member register use case', () => {
    it('should be possible register member', async () => {
        try {
            const member = await BuildMember({
                schema : {
                    email : 'pas@gmail.com'
                },
                emailService : MockEmailService(),
                repository
            })

            await expect(
                member.Register()
            ).resolves
            .toBeUndefined()
        } catch (e) {
             throw new Error(e)
        }
    })
    it('should not be possible register member exist in database', async () => {
        try {
            const member = await BuildMember({
                emailService : MockEmailService(),
                repository
            })

            await expect(
                member.Register()
            ).rejects
            .toThrow(MemberExistInDb)
        } catch (e) {
             throw new Error(e)
        }
    })
})