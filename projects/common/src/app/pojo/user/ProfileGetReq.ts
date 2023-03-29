export interface ProfileGetReq{
    id : string
    email : string
    fullName : string
    country : string
    province : string
    city : string
    phoneNumber : string
    postalCode : string
    positionId : string
    industryId : string
    company : string
    premiumUntil : Date | null
    file : string
    ver : number
}