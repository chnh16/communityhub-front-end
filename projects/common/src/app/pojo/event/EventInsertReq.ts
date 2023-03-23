import { FileInsertReq } from "../file/FileInsertReq"

export interface EventInsertReq {
    eventName: string
    provider: string
    locationName: string
    startDate: string
    endDate: string
    price: number
    categoryId: string
    file: FileInsertReq
}