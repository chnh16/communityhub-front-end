import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryGetAllRes } from "projects/common/src/app/pojo/category/CategoryGetAllRes";
import { CategoryInsertReq } from "projects/common/src/app/pojo/category/CategoryInsertReq";
import { CategoryUpdateReq } from "projects/common/src/app/pojo/category/CategoryUpdateReq";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-update-category',
    templateUrl : './update-category.component.html'
})
export class UpdateCategoryComponent implements OnInit, OnDestroy {
    resCategory : CategoryGetAllRes[] = []
    resCategoryId! : CategoryGetAllRes
    category$? : Subscription
    updateCategory$? : Subscription

    // showUpdateForm(category : CategoryGetAllRes){
    //     console.log(category)
    //     this.data.setValue({
    //         id: category.id,
    //         categoryCode : category.categoryCode,
    //         categoryName : category.categoryName,
    //         ver : category.ver
    //     })
    // }
    

    constructor(
        private categoryService : CategoryService,
        private fb : FormBuilder,
        private router : ActivatedRoute
    ){}

    data = this.fb.group({
        categoryCode : [''],
        categoryName : ['']
    })

    submit(){
        const data : CategoryUpdateReq = {
            id : this.resCategoryId.id!,
            categoryCode : this.data.value.categoryCode!,
            categoryName : this.data.value.categoryName!,
            ver : this.resCategoryId.ver!
        }
        this.updateCategory$ = this.categoryService.update(data).subscribe(res => {
            this.ngOnInit()
        })
    }

    ngOnInit(): void {
        this.router.params.subscribe(result => {
            this.category$ = this.categoryService.getById(result['id']).subscribe(res => {
                this.resCategoryId = res
                console.log(res)
                this.data.patchValue({
                    categoryCode : res.categoryCode,
                    categoryName : res.categoryName
                })
                console.log(this.data.value)
            })
        })    

    }

    ngOnDestroy(): void {
        this.updateCategory$?.unsubscribe()
    }
}