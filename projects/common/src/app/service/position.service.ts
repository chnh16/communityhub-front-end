import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { PositionGetAllRes } from "../../../../common/src/app/pojo/position/PositionGetAllRes";
import { PositionInsertReq } from "../../../../common/src/app/pojo/position/PositionInsertReq";
import { PositionUpdateReq } from "../../../../common/src/app/pojo/position/PositionUpdateReq";

@Injectable({
    providedIn: 'root'
})
export class PositionService {
    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<PositionGetAllRes[]> {
        return this.http.get<PositionGetAllRes[]>(`${BASE_URL}/positions`);
    }

    getById(id: string): Observable<PositionGetAllRes> {
        return this.http.get<PositionGetAllRes>(`${BASE_URL}/positions/${id}`);
    }

    insert(data: PositionInsertReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/positions/add`, data);
    }

    update(data: PositionUpdateReq): Observable<UpdateRes> {
        return this.http.put<UpdateRes>(`${BASE_URL}/positions/edit`, data);
    }

    delete(id: string): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/positions/${id}`);
    }
}