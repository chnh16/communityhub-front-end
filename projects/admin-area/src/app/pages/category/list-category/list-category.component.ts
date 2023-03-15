import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryGetAllRes } from "projects/common/src/app/pojo/category/CategoryGetAllRes";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-category',
    templateUrl : './list-category.component.html'
})
export class ListCategoryComponent implements OnInit, OnDestroy {
    data!: any[]
    resCategory! : CategoryGetAllRes[]
    category$? : Subscription

    constructor(
        private categoryService : CategoryService
    ){}

    ngOnInit(): void {
        this.category$ = this.categoryService.getAll().subscribe(res => {
            this.resCategory = res
        })
        this.data = [
            {code: '12AB1', expired: '13-03-2023', amount: '500000' }
        ]
    }

    ngOnDestroy(): void {
        this.category$?.unsubscribe()
    }
}