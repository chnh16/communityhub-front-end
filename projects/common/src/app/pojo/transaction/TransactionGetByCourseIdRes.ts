import { NumberFormatStyle } from "@angular/common"

export interface TransactionGetByCourseIdRes {
    id : string
    fileId : string
    fullName : string
    itemName : string
    grandTotal : number
    isApproved : Boolean
    ver : number
}