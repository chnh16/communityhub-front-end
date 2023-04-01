import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { TransactionGetAllRes } from "../pojo/transaction/TransactionGetAllRes";
import { TransactionGetByCourseIdRes } from "../pojo/transaction/TransactionGetByCourseIdRes";
import { TransactionInsertReq } from "../pojo/transaction/TransactionInsertReq";
import { TransactionGetByEventsIdRes } from "../pojo/transaction/TransactionGetByEventIdRes";
import { TransactionGetByMembershipIdRes } from "../pojo/transaction/TransactionGetByMembershipIdRes";
import { UpdateTransactionReq } from "../pojo/transaction/UpdateTransactionReq";
import { TransactionGetReportRes } from "../pojo/transaction/TransactionGetReportRes";


@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<TransactionGetByCourseIdRes[]> {
        return this.http.get<TransactionGetByCourseIdRes[]>(`${BASE_URL}/transaction`);
    }
    
    getTransactionCourseId(type : string) : Observable<TransactionGetByCourseIdRes[]>{
        return this.http.get<TransactionGetByCourseIdRes[]>(`${BASE_URL}/transaction?type=${type}`);
    }

    getTransactionEventId(type : string) : Observable<TransactionGetByEventsIdRes[]>{
        return this.http.get<TransactionGetByEventsIdRes[]>(`${BASE_URL}/transaction?type=${type}`);
    }

    getTransactionMembershipId(type : string) : Observable<TransactionGetByMembershipIdRes[]>{
        return this.http.get<TransactionGetByMembershipIdRes[]>(`${BASE_URL}/transaction?type=${type}`);
    }

    updateTransaction(data : UpdateTransactionReq) : Observable<UpdateRes> {
        return this.http.patch<UpdateRes>(`${BASE_URL}/transaction`, data);
    }

    getTransactionById(id : string) : Observable<TransactionGetAllRes>{
        return this.http.get<TransactionGetAllRes>(`${BASE_URL}/transaction/${id}`)
    }

    insert(data: TransactionInsertReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/transaction/add`, data)
    }

    getCourseReport(startDate: string, endDate: string): Observable<TransactionGetReportRes> {
        return this.http.get<TransactionGetReportRes>(`${BASE_URL}/transaction`)
    }


}