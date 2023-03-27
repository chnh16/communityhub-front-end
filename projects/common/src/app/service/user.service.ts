import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable, skip } from "rxjs";
import { LoginReq } from "../pojo/user/LoginReq";
import { LoginRes } from "../pojo/user/LoginRes";
import { ProfileGetReq } from "../pojo/user/ProfileGetReq";
import { ProfileInsertReq } from "../pojo/user/ProfileInsertReq";
import { RegisterReq } from "../pojo/user/RegisterReq";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(
        private http: HttpClient
    ) { }

    login(data: LoginReq): Observable<LoginRes> {
        return this.http.post<LoginRes>(`${BASE_URL}/users/login`, data, { headers: { 'skip': 'true' } });
    }

    regisMember(data: RegisterReq): Observable<RegisterReq> {
        return this.http.post<RegisterReq>(`${BASE_URL}/users/regis`, data, { headers: { 'skip': 'true' } });
    }

    getProfile() : Observable<ProfileGetReq>{
        return this.http.get<ProfileGetReq>(`${BASE_URL}/users/user-profile`)
    }

    setData(data : LoginRes){
        localStorage.setItem('dataLogin', JSON.stringify(data))

    }

    get token(): string {
        const data = localStorage.getItem('dataLogin')
        if (data) {
            return JSON.parse(data).token;
        }
        throw new Error('Token is empty')
    }

    get roleCode(): string {
        const data = localStorage.getItem('dataLogin')
        if (data) {
            return JSON.parse(data).roleCode
        }
        throw new Error('Role Code')
    }


    getidUser() {
        const data = localStorage.getItem('dataLogin')
        if (data) {
            return JSON.parse(data).idUser
        }
        throw new Error('Id User is Empty')
    }

}