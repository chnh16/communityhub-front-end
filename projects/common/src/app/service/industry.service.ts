import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { IndustryGetAllRes } from "../../../../common/src/app/pojo/industry/IndustryGetAllRes";
import { IndustryInsertReq } from "../../../../common/src/app/pojo/industry/IndustryInsertReq";
import { IndustryUpdateReq } from "../../../../common/src/app/pojo/industry/IndustryUpdateReq";

@Injectable()
export class IndustryService{
    constructor(
       private http : HttpClient
    ){}

    getAll() : Observable<IndustryGetAllRes[]>{
        return this.http.get<IndustryGetAllRes[]>(`${BASE_URL}/industry`);
    }

    insert(data : IndustryInsertReq) : Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/industry/add`, data);
    }

    update(data : IndustryUpdateReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>(`${BASE_URL}/industry/edit`, data);
    }

    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`${BASE_URL}/industry/${id}`);
    }
}