import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { ArticleInsertReq } from "../pojo/article/ArticleInsertReq";


@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(
        private http: HttpClient
    ) { }




    insert(data: ArticleInsertReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/article/add`, data);
    }


}