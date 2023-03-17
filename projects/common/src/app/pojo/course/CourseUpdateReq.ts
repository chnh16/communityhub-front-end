import { FileInsertReq } from "../file/FileInsertReq"

export interface CourseUpdateReq{
    id : string
    courseName : string
    provider : string
    trainer : string
    locationName : string
    startDate : Date
    endDate : Date
    price : number
    categoryId : string
    file : FileInsertReq
    ver : number
}