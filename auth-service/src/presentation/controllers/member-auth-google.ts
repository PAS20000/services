import { MemberAuthRequestController, MemberAuthResponseController } from "./interfaces/member-auth";
import BadRequest from "../web/helpers/bad-request";
import ServerError from "../web/helpers/server-error";
import { HttpResponse, HttpResponseError } from "../web/http";
import Unauthorized from "../web/helpers/unauthorized";
import Ok from "../web/helpers/ok";

const MemberAuthGoogleController = async ({ 
    BuildMember,
    email,
    password
} : MemberAuthRequestController) => {
    try {
        const member = await BuildMember({})

        const href = await member.SignInWithGoogle({})
    } 
    catch(e) {

    }
}

export default MemberAuthGoogleController