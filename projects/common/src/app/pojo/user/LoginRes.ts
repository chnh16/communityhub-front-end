export interface LoginRes{
    token : string
    roleCode : string
    idUser : string
    fullName : string
    premiumUntil : Date
    isVerified : boolean
}