import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { VoucherGetAllRes } from "../../../../common/src/app/pojo/voucher/VoucherGetAllRes";
import { VoucherInsertReq } from "../../../../common/src/app/pojo/voucher/VoucherInsertReq";
import { VoucherUpdateReq } from "../../../../common/src/app/pojo/voucher/VoucherUpdateReq";

@Injectable({
    providedIn: 'root'
})
export class VoucherService {
    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<VoucherGetAllRes[]> {
        return this.http.get<VoucherGetAllRes[]>(`${BASE_URL}/voucher`);
    }

    getVoucher(limit: number, offset: number): Observable<VoucherGetAllRes[]> {
        return this.http.get<VoucherGetAllRes[]>(`${BASE_URL}/voucher/page?limit=${limit}&offset=${offset}`)
    }

    getById(id: string): Observable<VoucherGetAllRes> {
        return this.http.get<VoucherGetAllRes>(`${BASE_URL}/voucher/${id}`);
    }

    insert(data: VoucherInsertReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/voucher/add`, data);
    }

    update(data: VoucherUpdateReq): Observable<UpdateRes> {
        return this.http.put<UpdateRes>(`${BASE_URL}/voucher/edit`, data);
    }

    delete(id: string): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/voucher/${id}`);
    }
}