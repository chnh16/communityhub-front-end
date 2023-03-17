import { FileInsertReq } from "../file/FileInsertReq"

export interface CourseInsertReq{
    courseName : string
    provider : string
    trainer : string
    locationName : string
    startDate : Date
    endDate : Date
    price : number
    categoryId : string
    file : FileInsertReq
}