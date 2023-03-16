import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { CategoryGetAllRes } from "../pojo/category/CategoryGetAllRes";
import { CategoryInsertReq } from "../pojo/category/CategoryInsertReq";
import { CategoryUpdateReq } from "../pojo/category/CategoryUpdateReq";

@Injectable({
    providedIn : 'root'
})
export class CategoryService{
    constructor(
       private http : HttpClient
    ){}

    getAll() : Observable<CategoryGetAllRes[]>{
        return this.http.get<CategoryGetAllRes[]>(`${BASE_URL}/category`);
    }

    insert(data : CategoryInsertReq) : Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/category/add`, data);
    }

    update(data : CategoryUpdateReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>(`${BASE_URL}/category/edit`, data);
    }

    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`${BASE_URL}/category/${id}`);
    }
}