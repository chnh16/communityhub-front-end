import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { ArticleGetAllRes } from "../pojo/article/ArticleGetAllRes";
import { ArticleInsertReq } from "../pojo/article/ArticleInsertReq";
import { ArticleUpdateReq } from "../pojo/article/ArticleUpdateReq";


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

    getAll(): Observable<ArticleGetAllRes[]> {
        return this.http.get<ArticleGetAllRes[]>(`${BASE_URL}/article`);
    }

    delete(id: string): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/article/${id}`);
    }

    getArticleById(id: string): Observable<ArticleGetAllRes> {
        return this.http.get<ArticleGetAllRes>(`${BASE_URL}/article/${id}`);
    }

    update(data: ArticleUpdateReq) : Observable<UpdateRes> {
        return this.http.put<UpdateRes>(`${BASE_URL}/article`, data);
    }
}