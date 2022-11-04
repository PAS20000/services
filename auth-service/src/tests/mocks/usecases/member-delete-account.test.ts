import { expect, it, describe } from 'vitest'
import MemberInvalidPassword from '../../../application/errors/member-invalid-password'
import MemberNotFound from '../../../application/errors/member-not-found'
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


describe('Member delete use case', () => {
    it('should be possible delete member', async () => {
        try {
            const member = await BuildMember({
                schema : {
                    id : '1'
                },
                repository
            })

            await expect(
                member.Delete()
            ).resolves
            .toBeUndefined()
        } catch (e) {
            throw new Error(e)
        }
    })
    it('should not be possible delete member if wrong password', async () => {
        try {
            const member = await BuildMember({
                schema : {
                    id : '1',
                    password : {
                        value : 'fake'
                    }
                },
                repository
            })

            await expect(
                member.Delete()
            )
            .rejects
            .toThrow(MemberInvalidPassword)
        } catch (e) {
            throw new Error(e)
        }
    })
    it('should not be possible delete member if id no exist in database', async () => {
        try {
            const member = await BuildMember({
                schema : {
                    id : 'fakeid',
                },
                repository
            })
            await expect(
                member.Delete()
            )
            .rejects
            .toThrow(MemberNotFound)
        } catch (e) {
            throw new Error(e)
        }
    })
})