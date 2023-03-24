import { ProfileInsertReq } from "./ProfileInsertReq"

export interface UserRegisterReq {
    email: string
    passwordUser: string
    profile: ProfileInsertReq

}