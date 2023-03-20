export interface VoucherUpdateReq {
    id: string
    voucherCode: string
    expiredDate: string
    amount: number
    ver: number
}