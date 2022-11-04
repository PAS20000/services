import { HttpResponse, HttpResponseError } from "../http"

class ServerError implements HttpResponse<HttpResponseError> {
   readonly statusCode: number
   readonly data: HttpResponseError<string>

   constructor() {
     this.data = {
        error : 'Server error'
     },
     this.statusCode = 500
   }
}


export default ServerError