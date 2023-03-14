import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable, skip } from "rxjs";
import { LoginReq } from "../pojo/user/LoginReq";
import { LoginRes } from "../pojo/user/LoginRes";

@Injectable()
export class UserService{
    constructor(
       private http : HttpClient
    ){}

    login(data : LoginReq) : Observable<LoginRes>{
        return this.http.post<LoginRes>(`${BASE_URL}/login`, data, { headers : { 'skip' : 'true' } });
    }

    setData(data : LoginRes){

    }
}