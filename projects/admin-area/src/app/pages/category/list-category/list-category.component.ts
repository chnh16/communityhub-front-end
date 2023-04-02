import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
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

    limit: number = 5
    offset: number = 0
    totalData: number = 0


    constructor(
        private categoryService: CategoryService,
        private title : Title
    ) { 
        this.title.setTitle("Category")
    }

    deleteCategory(category: CategoryGetAllRes) {
        console.log("Delete")
        this.categoryDelete$ = this.categoryService.delete(category.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }


    loadData(event: LazyLoadEvent) {
        this.getAll(event.first, event.rows)
    }

    getAll(limit: number = this.limit, offset: number = this.offset): void {

        this.limit = limit
        this.offset = offset

        this.category$ = this.categoryService.getCategory(limit, offset).subscribe(res => {
            const resultData: any = res
            this.resCategory = resultData.data
            this.totalData = resultData.total
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