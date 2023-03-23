import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoryGetAllRes } from "projects/common/src/app/pojo/category/CategoryGetAllRes";
import { CourseGetAllRes } from "projects/common/src/app/pojo/course/CourseGetAllRes";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { CourseService } from "projects/common/src/app/service/course.service";
import { Subscription } from "rxjs";
import { SelectItem } from 'primeng/api';
import { UserService } from "projects/common/src/app/service/user.service";


@Component({
    selector: 'app-course',
    templateUrl: './list-course.component.html'
})

export class ListCourseComponent implements OnInit {

    private getCourse$?: Subscription
    private getCourseByCategory$?: Subscription

    private getCategory$?: Subscription
    course: CourseGetAllRes[] = []
    categorys: CategoryGetAllRes[] = []

    reqParams = this.fb.group({
        category: [''],
        price: ['']
    })

    sortOptions!: SelectItem[];
    selectedSortOption!: string;

    role = this.userService.roleCode


    constructor(
        private courseService: CourseService,
        private categoryService: CategoryService,
        private router: ActivatedRoute,
        private fb: FormBuilder,
        private userService: UserService


    ) {
        this.sortOptions = [
            { label: 'Ascending', value: 'ASC' },
            { label: 'Descending', value: 'DESC' }
        ];
        this.selectedSortOption = 'ASC';
    }

    filterPrice = [
        { name: "ASC" },
        { name: "DESC" }
    ];

    ngOnInit(): void {

        this.getCourse$ = this.courseService.getAll(this.reqParams.value.category!, this.reqParams.value.price!).subscribe(result => {
            this.course = result
        })

        this.getCategory$ = this.categoryService.getAll().subscribe(result => {
            this.categorys = result
        })

        this.reqParams.get('category')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.getCourse$ = this.courseService.getAll(temp, this.reqParams.value.price!).subscribe(res => {
                this.course = res
            })
        })
    }

}