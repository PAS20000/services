import { MemberAuthRequestController, MemberAuthResponseController } from "./interfaces/member-auth";
import BadRequest from "../web/helpers/bad-request";
import ServerError from "../web/helpers/server-error";
import { HttpResponse, HttpResponseError } from "../web/http";
import Unauthorized from "../web/helpers/unauthorized";
import Ok from "../web/helpers/ok";

const MemberAuthController = async ({ 
    BuildMember,
    email,
    password
} : MemberAuthRequestController) : Promise<HttpResponse<MemberAuthResponseController | HttpResponseError>> => {
    try {
        if (email && password) {
            const build = await BuildMember({
                schema : {
                    email,
                    password : {
                        value : password,
                        hash : ''
                    }
                }
            })
            const token = await build.Auth()

            if (token) {
                return new Ok({ token })
            } else {
                return new Unauthorized('Invalid password')
            }
        } else {
            return new BadRequest('Missing email or password')
        }
    } catch (e) {
        return new ServerError()
    }
}

export default MemberAuthController