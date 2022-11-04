import { MemberRequest, MemberResponse } from "../entities/member/interfaces/member"
import MemberInvalidFields from "../errors/member-validator-inputs"
import MemberSchema from "../schemas/member"

const MemberValidator = ({
    email,
    name,
    nickname,
    password,
    signature,
    createdAt,
    id,
    secrets,
    updatedAt,
    verified,
    access_token,
    refresh_token
} : MemberRequest) : MemberResponse => {

    const { error, value } = MemberSchema.validate({
        email,
        name,
        nickname,
        password,
        signature,
        id,
        secrets,
        verified,
        createdAt,
        updatedAt,
        access_token,
        refresh_token
    })

    if (error) {
        throw new MemberInvalidFields(error.details)
    } else {
        return value
    }
}

export default MemberValidator