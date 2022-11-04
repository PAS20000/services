interface HttpResponseError<T = string> {
    error : T
}

interface HttpResponse<T = any> {
    statusCode : number
    data : T 
}

export {
    HttpResponse,
    HttpResponseError
}