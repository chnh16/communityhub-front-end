import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/BaseUrl";
import { DeleteRes } from "../pojo/DeleteRes";
import { EventGetAllRes } from "../pojo/event/EventGetAllRes";
import { EventInsertReq } from "../pojo/event/EventInsertReq";
import { EventUpdateReq } from "../pojo/event/EventUpdateReq";
import { InsertRes } from "../pojo/InsertRes";
import { UpdateRes } from "../pojo/UpdateRes";

@Injectable({
    providedIn: 'root'
})

export class EventService {
    constructor(
        private http: HttpClient
    ) { }

    getAll(id: string, price: string, limit: number, offset: number): Observable<EventGetAllRes[]> {
        return this.http.get<EventGetAllRes[]>(`${BASE_URL}/events?category=${id}&price=${price}&limit=${limit}&offset=${offset}`)
    }


    insert(data: EventInsertReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(`${BASE_URL}/events/add`, data)
    }

    getByEventId(id: string): Observable<EventGetAllRes> {
        return this.http.get<EventGetAllRes>(`${BASE_URL}/events/${id}`)
    }

    getByUserId(id: string, price: string, limit: number, offset: number): Observable<EventGetAllRes[]> {
        return this.http.get<EventGetAllRes[]>(`${BASE_URL}/events/user-event?category=${id}&price=${price}&limit=${limit}&offset=${offset}`)
    }

    getUserEvent(id: string, price: string, limit: number, offset: number): Observable<EventGetAllRes[]> {
        return this.http.get<EventGetAllRes[]>(`${BASE_URL}/events/my-event?category=${id}&price=${price}&limit=${limit}&offset=${offset}`)
    }

    update(data: EventUpdateReq): Observable<UpdateRes> {
        return this.http.put<UpdateRes>(`${BASE_URL}/events`, data)
    }

    delete(id: string): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>(`${BASE_URL}/events/${id}`)
    }

    //BUY EVENT

    //GET EVENT FOR USER

    //DELETE EVENT FOR USER
}