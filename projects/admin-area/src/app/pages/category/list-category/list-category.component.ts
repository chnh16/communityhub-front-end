import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-voucher',
    templateUrl : './list-category.component.html'
})
export class ListCategoryComponent implements OnInit {
    data!: any[];


    ngOnInit(): void {
        this.data = [
            {code: '12AB1', expired: '13-03-2023', amount: '500000' }
        ]
    }
}