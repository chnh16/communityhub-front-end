export interface CourseGetAllRes {
    id: string
    userId: string
    courseName: string
    courseCode: string
    provider: string
    trainer: string
    locationName: string
    startDate: Date
    endDate: Date
    price: number
    categoryId: string
    file: string
    ver: number
}