import { FileInsertReq } from "../file/FileInsertReq";

export interface TransactionInsertReq {
    //transactionDate: string
    //grandTotal: number
    eventId: string
    courseId: string
    membershipId: string
    voucherCode: string
    //isApproved: boolean
    file: FileInsertReq
}