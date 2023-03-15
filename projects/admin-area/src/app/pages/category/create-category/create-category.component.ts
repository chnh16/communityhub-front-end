import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryInsertReq } from "projects/common/src/app/pojo/category/CategoryInsertReq";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-create-category',
    templateUrl : './create-category.component.html'
})
export class CreateCategoryComponent implements OnInit, OnDestroy {
    data = this.fb.group({
        categoryCode : ['', Validators.required],
        categoryName : ['', Validators.required]
    })
    createCategory$? : Subscription

    constructor(
        private categoryService : CategoryService,
        private fb : FormBuilder
    ){}

    submit(){
        const insert : CategoryInsertReq = {
            categoryCode : this.data.value.categoryCode!,
            categoryName : this.data.value.categoryName!
        }
        this.createCategory$ = this.categoryService.insert(insert).subscribe()
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.createCategory$?.unsubscribe()
    }
}