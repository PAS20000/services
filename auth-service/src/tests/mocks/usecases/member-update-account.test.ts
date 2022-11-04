import { expect, it, describe } from 'vitest'
import MemberNotFound from '../../../application/errors/member-not-found'
import { EmailServiceSendResponseInfraModel } from '../../../infra/models/email'
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
        refresh_token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5ODY3YjM1LWNmZmQtNDIyNC1iZWRmLTQ5NTMzNmYxZjIzNCIsImlhdCI6MTY2Njk5NDkxMCwiZXhwIjoxNjk4NTMwOTEwfQ.DAYugi89VB0btk0mHWO4QbUypc-6smseSMu6f2THli4'
    }
])


const MockEmailService = (props ?: any) : EmailServiceSendResponseInfraModel => {

    return {
        async Send(props) {}
    }
}

describe('Member update use case', () => {
    it('should be possible update member', async () => {
        try {
            const member = await BuildMember({
                schema : {
                    id : '1'
                },
                emailService : MockEmailService(),
                repository
            })

            await expect(
                member.Update({
                    name : 'new'
                })
            ).resolves
            .toBeTypeOf('object')
        } catch (e) {
            throw new Error(e)
        }
    })
    it('should not be possible update member not exist in database', async () => {
        try {
            const member = await BuildMember({
                schema : {
                    id : '2'
                },
                emailService : MockEmailService(),
                repository
            })

            await expect(
                member.Update({
                    name : 'new'
                })
            )
            .rejects
            .toThrow(MemberNotFound)
        } catch (e) {
            throw new Error(e)
        }
    })
})