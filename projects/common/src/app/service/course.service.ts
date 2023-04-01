import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/BaseUrl";
import { CourseGetAllRes } from "../pojo/course/CourseGetAllRes";
import { CourseInsertReq } from "../pojo/course/CourseInsertReq";
import { CourseUpdateReq } from "../pojo/course/CourseUpdateReq";
import { DeleteRes } from "../pojo/DeleteRes";
import { InsertRes } from "../pojo/InsertRes";
import { UpdateRes } from "../pojo/UpdateRes";

@Injectable({
    providedIn: 'root'
})

export class CourseService {
    constructor(
        private http: HttpClient
    ) { }



    getAll(id: string, price: string, limit: number, offset: number): Observable<CourseGetAllRes[]> {
        return this.http.get<CourseGetAllRes[]>(`${BASE_URL}/courses?category=${id}&price=${price}&limit=${limit}&offset=${offset}`)
    }

    insert(data: CourseInsertReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/courses/add`, data)
    }

    getByCourseId(id: string): Observable<CourseGetAllRes> {
        return this.http.get<CourseGetAllRes>(`${BASE_URL}/courses/${id}`)
    }

    getByUserId(id: string, price: string, limit: number, offset: number): Observable<CourseGetAllRes[]> {
        return this.http.get<CourseGetAllRes[]>(`${BASE_URL}/courses/user-course?category=${id}&price=${price}&limit=${limit}&offset=${offset}`)
    }

    getUserCourse(id: string, price: string, limit: number, offset: number): Observable<CourseGetAllRes[]> {
        return this.http.get<CourseGetAllRes[]>(`${BASE_URL}/courses/my-course?category=${id}&price=${price}&limit=${limit}&offset=${offset}`)
    }

    update(data: CourseUpdateReq): Observable<UpdateRes> {
        return this.http.put<UpdateRes>(`${BASE_URL} / courses`, data)
    }

    delete(id: string): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL} / courses / ${id}`)
    }

}