import { MemberBuildRequest, MemberBuildResponse } from "../../../main/builders/interfaces/member-build-interfaces"

interface MemberAuthResponseController  {
    token : string
}

interface MemberAuthRequestController {
    BuildMember : (req : MemberBuildRequest) => Promise<MemberBuildResponse>
    email : string
    password : string
}

type CreateMemberAuthController = (req : MemberAuthResponseController) => MemberAuthRequestController

export {
    MemberAuthResponseController,
    MemberAuthRequestController,
    CreateMemberAuthController
}