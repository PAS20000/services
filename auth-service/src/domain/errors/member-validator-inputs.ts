export default class MemberInvalidFields extends Error {
    constructor(details : Array<any>) {
        super(JSON.stringify(details, null, 2))
        this.name = 'MemberInvalidFields'
    }
}