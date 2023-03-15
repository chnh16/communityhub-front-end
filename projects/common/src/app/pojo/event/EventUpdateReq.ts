import { FileInsertReq } from "../file/FileInsertReq"

export interface EventUpdateReq{
    id : string
    eventName : string
    provider : string
    locationName : string
    startDate : Date
    endDate : Date
    price : number
    categoryId : string
    file : FileInsertReq
    ver : number
}