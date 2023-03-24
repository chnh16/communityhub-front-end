import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryGetAllRes } from "projects/common/src/app/pojo/category/CategoryGetAllRes";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-category',
    templateUrl: './list-category.component.html'
})
export class ListCategoryComponent implements OnInit, OnDestroy {

    resCategory: CategoryGetAllRes[] = []
    category$?: Subscription
    categoryDelete$?: Subscription

    limit: number = 3
    offset: number = 0
    totalData: number = 0

    constructor(
        private categoryService: CategoryService
    ) { }

    deleteCategory(category: CategoryGetAllRes) {
        console.log("Delete")
        this.categoryDelete$ = this.categoryService.delete(category.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }

    getAll(limit: number, offset: number) {

        this.limit = limit
        this.offset = offset

        this.category$ = this.categoryService.getCategory(limit, offset).subscribe(res => {
            this.resCategory = res
        })
    }

    ngOnInit(): void {
        this.category$ = this.categoryService.getAll().subscribe(res => {
            this.resCategory = res
        })

    }

    ngOnDestroy(): void {
        this.category$?.unsubscribe()
    }
}