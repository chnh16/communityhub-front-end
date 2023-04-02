import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryGetAllRes } from "projects/common/src/app/pojo/category/CategoryGetAllRes";
import { CategoryInsertReq } from "projects/common/src/app/pojo/category/CategoryInsertReq";
import { CategoryUpdateReq } from "projects/common/src/app/pojo/category/CategoryUpdateReq";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-update-category',
    templateUrl: './update-category.component.html'
})
export class UpdateCategoryComponent implements OnInit, OnDestroy {
    id!: string
    resCategoryId?: CategoryGetAllRes
    category$?: Subscription
    updateCategory$?: Subscription

    constructor(
        private categoryService: CategoryService,
        private fb: FormBuilder,
        private activatedRouter: ActivatedRoute,
        private router: Router
    ) { }

    data = this.fb.group({
        id: [''],

        categoryName: [''],
        ver: [0]
    })

    onUpdate() {
        const update: CategoryUpdateReq = {
            id: this.data.value.id!,

            categoryName: this.data.value.categoryName!,
            ver: this.data.value.ver!
        }
        this.updateCategory$ = this.categoryService.update(update).subscribe(res => {
            this.router.navigateByUrl(`category`)
        })
    }

    ngOnInit(): void {
        this.activatedRouter.params.subscribe(result => {
            const params = result as any
            this.id = params.id
            this.category$ = this.categoryService.getById(params.id).subscribe(result1 => {
                this.data.patchValue({
                    id: result1.id,

                    categoryName: result1.categoryName,
                    ver: result1.ver
                })
            })

        })

    }

    ngOnDestroy(): void {
        // this.updateCategory$?.unsubscribe()
    }
}