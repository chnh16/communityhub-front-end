import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { UpdateRes } from "projects/common/src/app/pojo/UpdateRes";
import { Observable } from "rxjs";
import { PostGetAllRes } from "../pojo/post/PostGetAllRes";
import { PostInsertReq } from "../pojo/post/PostInsertReq";
import { PostLikeReq } from "../pojo/post/PostLikeReq";
import { TransactionGetByCourseIdRes } from "../pojo/transaction/TransactionGetByCourseIdRes";


@Injectable({
    providedIn : 'root'
})
export class PostService{
    constructor(
       private http : HttpClient
    ){}

    getPost() : Observable<PostGetAllRes[]> {
        return this.http.get<PostGetAllRes[]>(`${BASE_URL}/post/list-post`)
    }

    insertPost(data : PostInsertReq) : Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/post`, data)
    }

    onLike(data : PostLikeReq) : Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/post/like`, data)
    }

    onDislike(postId : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`${BASE_URL}/post/like/${postId}`)
    }
}