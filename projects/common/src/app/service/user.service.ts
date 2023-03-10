import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable, skip } from "rxjs";
import { LoginReq } from "../pojo/user/LoginReq";
import { LoginRes } from "../pojo/user/LoginRes";

@Injectable({
    providedIn : 'root'
})
export class UserService{
    constructor(
       private http : HttpClient
    ){}

    login(data : LoginReq) : Observable<LoginRes>{
        return this.http.post<LoginRes>(`${BASE_URL}/users/login`, data, { headers : { 'skip' : 'true' } });
    }

    setData(data : LoginRes){
        localStorage.setItem('dataLogin', JSON.stringify(data))

    }

    get token() : string {
        const data = localStorage.getItem('dataLogin')
        if(data) {
            return JSON.parse(data).token;
        }
        throw new Error('Token is emty')
    }

    get roleCode() : string {
        const data = localStorage.getItem('dataLogin')
        if(data) {
            return JSON.parse(data).roleCode
        }
        throw new Error('Role Code')
    }
}