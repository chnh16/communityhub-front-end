import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { DeleteRes } from "projects/common/src/app/pojo/DeleteRes";
import { InsertRes } from "projects/common/src/app/pojo/InsertRes";
import { Observable } from "rxjs";
import { PollingAnswerGetCountRes } from "../pojo/pollinganswer/PollingAnswerGetCountRes";
import { PostBookmarkReq } from "../pojo/post/PostBookmarkReq";
import { PostGetAllRes } from "../pojo/post/PostGetAllRes";
import { PostInsertReq } from "../pojo/post/PostInsertReq";
import { PostLikeReq } from "../pojo/post/PostLikeReq";
import { PostDetailGetAllRes } from "../pojo/postdetail/PostDetailGetAllRes";
import { PostDetailInsertReq } from "../pojo/postdetail/PostDetailInsertReq";


@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(
        private http: HttpClient
    ) { }

    getPost(limit: number, offset: number): Observable<PostGetAllRes[]> {
        return this.http.get<PostGetAllRes[]>(`${BASE_URL}/post/list-post?limit=${limit}&offset=${offset}`)
    }

    getPostById(postId: string): Observable<PostGetAllRes> {
        return this.http.get<PostGetAllRes>(`${BASE_URL}/post/${postId}`)
    }

    insertPost(data: PostInsertReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/post`, data)
    }

    onLike(data: PostLikeReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/post/like`, data)
    }

    onDislike(postId: string): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/post/like/${postId}`)
    }

    onBookmark(data: PostBookmarkReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/post/bookmark`, data)
    }

    getPostBookmark(limit: number, offset: number): Observable<PostGetAllRes[]> {
        return this.http.get<PostGetAllRes[]>(`${BASE_URL}/post/post-bookmark?limit=${limit}&offset=${offset}`)
    }

    getPostLike(limit: number, offset: number): Observable<PostGetAllRes[]> {
        return this.http.get<PostGetAllRes[]>(`${BASE_URL}/post/post-like?limit=${limit}&offset=${offset}`)
    }

    onRemoveBookmark(postId: string): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/post/bookmark/${postId}`)
    }

    getPollingAnswer(postId: string): Observable<PollingAnswerGetCountRes[]> {
        return this.http.get<PollingAnswerGetCountRes[]>(`${BASE_URL}/post/polling/${postId}`)
    }

    onInsertPollingAnswer(pollingChoiceId: string): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/post/polling/${pollingChoiceId}`, {})
    }

    onRemovePollingAnswer(pollingAnswerId: string): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/post/polling/${pollingAnswerId}`)
    }

    getPostDetail(postId: string): Observable<PostDetailGetAllRes[]> {
        return this.http.get<PostDetailGetAllRes[]>(`${BASE_URL}/post/detail/${postId}`)
    }

    insertPostDetail(postDetail : PostDetailInsertReq) : Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/post/detail/add`, postDetail)
    }
}