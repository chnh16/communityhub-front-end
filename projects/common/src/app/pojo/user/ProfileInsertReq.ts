import { FileInsertReq } from "../file/FileInsertReq"

export interface ProfileInsertReq {
    fullname: string
    country: string
    province: string
    company: string
    city: string
    phoneNumber: string
    postalCode: string
    positionId: string
    industryId: string
    file: FileInsertReq
}