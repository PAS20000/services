import { HttpResponse, HttpResponseError } from "../http";

class BadRequest implements HttpResponse<HttpResponseError> {
   readonly data: HttpResponseError<string>;
   readonly statusCode: number;
   
   constructor(error : string) {
    this.data = {
        error : error
    }
    this.statusCode = 400
   }
}

export default BadRequest