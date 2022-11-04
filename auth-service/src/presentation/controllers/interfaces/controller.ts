import { MemberAuthRequestController, MemberAuthResponseController } from "./member-auth";

type ControllersRequestsModel = [
    MemberAuthRequestController
][number]

type ControllersResponsesModel = [
    MemberAuthResponseController
][number]


interface ControllerModel {
    controller(request : ControllersRequestsModel) : Promise<ControllersResponsesModel>
}

export {
    ControllerModel,
    ControllersResponsesModel,
    ControllersRequestsModel
}