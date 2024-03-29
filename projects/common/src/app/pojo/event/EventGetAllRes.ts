export interface EventGetAllRes {
    id: string
    userId: string
    eventName: string
    eventCode: string
    provider: string
    locationName: string
    startDate: Date
    endDate: Date
    price: number
    categoryId: string
    fileId: string
    ver: number
}