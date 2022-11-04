type Status = [
    'pending',
    'success',
    'denied'
][number]

interface PaymentRequest {
    id ?: string
    status ?: Status
    payer_email : string
    member_id : string
}

interface PaymentResponse {
    id : string
    status : Status
    payer_email : string
    memberId : string
}

export {
    PaymentRequest,
    PaymentResponse,
    Status
}