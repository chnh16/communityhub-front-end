import { FileInsertReq } from "../file/FileInsertReq"

export interface ProfileInsertReq{
    fullName : string
    country : string
    province : string
    city : string
    phoneNumber : string
    postalCode : string
    positionId : string
    industryId : string
    company : string
    file : FileInsertReq
}