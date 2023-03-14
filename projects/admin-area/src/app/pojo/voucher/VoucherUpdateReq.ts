export interface VoucherUpdateReq{
    id : string
    voucherCode : string
    expiredDate : Date
    amount : number
    ver : number
}