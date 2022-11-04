export default class MemberNotFound extends Error {
    constructor() {
        super('Member error')
        this.name = 'MemberNotFound'
    }
}