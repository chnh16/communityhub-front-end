import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-event',
    templateUrl : './event.component.html'
})

export class EventComponent implements OnInit, OnDestroy{

    ngOnInit(): void {
        this.init()
    }

    init(){

    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

}