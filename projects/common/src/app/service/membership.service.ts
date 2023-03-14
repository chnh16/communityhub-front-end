import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { MembershipGetAllRes } from "../../../../common/src/app/pojo/membership/MembershipGetAllRes";
import { MembershipInsertReq } from "../../../../common/src/app/pojo/membership/MembershipInsertReq";
import { MembershipUpdateReq } from "../../../../common/src/app/pojo/membership/MembershipUpdateReq";

@Injectable()
export class MembershipService{
    constructor(
       private http : HttpClient
    ){}

    getAll() : Observable<MembershipGetAllRes[]>{
        return this.http.get<MembershipGetAllRes[]>(`${BASE_URL}/membership`);
    }

    insert(data : MembershipInsertReq) : Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/membership/add`, data);
    }

    update(data : MembershipUpdateReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>(`${BASE_URL}/membership/edit`, data);
    }

    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`${BASE_URL}/membership/${id}`);
    }
}