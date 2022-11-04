import { HttpResponse } from "../http";

class Ok implements HttpResponse {
   readonly data: any;
   readonly statusCode: number;
   
   constructor(data : any) {
    this.data = data
    this.statusCode = 200
   }
}

export default Ok