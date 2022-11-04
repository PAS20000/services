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
        id : '100',
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

describe('Member sign in google use case', () => {
    it('should be possible get url from google', async () => {
        try {
            const member = await BuildMember({
                repository
            })

            await expect(
                member.SignInWithGoogle({})
            ).resolves
            .toBeTypeOf('string')
        } catch (e) {
           throw new Error(e)
        }
    })
})