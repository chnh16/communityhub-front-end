import { FileInsertReq } from "../file/FileInsertReq"

export interface CourseInsertReq {
    courseName: string
    provider: string
    trainer: string
    locationName: string
    startDate: string
    endDate: string
    price: number
    categoryId: string
    file: FileInsertReq
}