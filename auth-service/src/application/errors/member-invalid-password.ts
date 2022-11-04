export default class MemberInvalidPassword extends Error {
    constructor() {
        super('Member error')
        this.name = 'MemberInvalidPassword'
    }
}