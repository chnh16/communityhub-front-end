import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { TransactionGetByCourseIdRes } from "../pojo/transaction/TransactionGetByCourseIdRes";


@Injectable({
    providedIn : 'root'
})
export class TransactionService{
    constructor(
       private http : HttpClient
    ){}

    getAll() : Observable<TransactionGetByCourseIdRes[]>{
        return this.http.get<TransactionGetByCourseIdRes[]>(`${BASE_URL}/transaction`);
    }
}