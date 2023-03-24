import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { Observable } from "rxjs";
import { PostBookmarkReq } from "../pojo/post/PostBookmarkReq";
import { PostGetAllRes } from "../pojo/post/PostGetAllRes";
import { PostInsertReq } from "../pojo/post/PostInsertReq";
import { PostLikeReq } from "../pojo/post/PostLikeReq";


@Injectable({
    providedIn : 'root'
})
export class PostService{
    constructor(
       private http : HttpClient
    ){}

    getPost(limit : number, offset : number) : Observable<PostGetAllRes[]> {
        return this.http.get<PostGetAllRes[]>(`${BASE_URL}/post/list-post?limit=${limit}&offset=${offset}`)
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

    onBookmark(data : PostBookmarkReq) : Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/post/bookmark`, data)
    }

    onRemoveBookmark(postId : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`${BASE_URL}/post/bookmark/${postId}`)
    }
}