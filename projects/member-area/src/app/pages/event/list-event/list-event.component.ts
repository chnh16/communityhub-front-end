import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector : 'app-event',
    templateUrl : './list-event.component.html'
})

export class ListEventComponent{
    data = this.fb.group({
        category : [''],
        price : ['']
    })
    categories = [
        "Category A",
        "Category B",
        "Category C"
    ]
    // price! : string
    // category = this.categories[0]

    constructor(
        private fb : FormBuilder
    ){}
}