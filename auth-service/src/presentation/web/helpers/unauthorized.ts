import { HttpResponse, HttpResponseError } from "../http"

class Unauthorized implements HttpResponse<HttpResponseError> {
   readonly statusCode: number
   readonly data: HttpResponseError<string>

   constructor(error : string) {
      this.data = {
          error : error
      }
      this.statusCode = 401
   }
}


export default Unauthorized