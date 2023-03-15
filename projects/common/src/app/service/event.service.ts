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
    providedIn : 'root'
})

export class EventService{
    constructor(
        private http : HttpClient
    ){}

    getAll() : Observable<EventGetAllRes[]>{
        return this.http.get<EventGetAllRes[]>(`${BASE_URL}/events`)
    }

    insert( data : EventInsertReq ) : Observable<InsertRes>{
        return this.http.post<InsertRes>(`${BASE_URL}/events/add`, data)
    }

    getByCategoryId( id : string ) : Observable<EventGetAllRes[]>{
        return this.http.get<EventGetAllRes[]>(`${BASE_URL}/events/${id}`)
    }

    update( data : EventUpdateReq ) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>(`${BASE_URL}/events`, data)
    }

    delete( id : string ) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`${BASE_URL}/events/${id}`)
    }

    //BUY EVENT

    //GET EVENT FOR USER

    //DELETE EVENT FOR USER
}