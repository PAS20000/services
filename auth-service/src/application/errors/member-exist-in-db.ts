export default class ExistMemberInDb extends Error {
    constructor() {
        super('Member error')
        this.name = 'ExistMemberInDb'
    }
}