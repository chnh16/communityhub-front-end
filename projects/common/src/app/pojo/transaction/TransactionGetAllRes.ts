export interface TransactionGetAllRes {
    id: string
    fileId: string
    fullName: string
    itemName: string
    grandTotal: number
    isApproved: boolean
    statusTransaction: string
    ver: number
}