import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector : 'app-create-event',
    templateUrl : './create-event.component.html'
})

export class CreateEventComponent implements OnInit, OnDestroy{

    data = this.fb.group({
        
    })

    constructor(
        private fb : FormBuilder
    ){}

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

}