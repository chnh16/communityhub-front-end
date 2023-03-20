import { ProfileInsertReq } from "./ProfileInsertReq"

export interface RegisterReq{
    email : string
    passwordUser : string
    profile : ProfileInsertReq
}