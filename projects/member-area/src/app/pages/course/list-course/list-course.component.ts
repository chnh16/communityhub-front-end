import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoryGetAllRes } from "projects/common/src/app/pojo/category/CategoryGetAllRes";
import { CourseGetAllRes } from "projects/common/src/app/pojo/course/CourseGetAllRes";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { CourseService } from "projects/common/src/app/service/course.service";
import { Subscription } from "rxjs";
import { SelectItem } from 'primeng/api';
import { UserService } from "projects/common/src/app/service/user.service";
import { Title } from "@angular/platform-browser";


@Component({
    selector: 'app-course',
    templateUrl: './list-course.component.html',
})

export class ListCourseComponent implements OnInit, OnDestroy {

    private getCourse$?: Subscription
    private getCourseById$?: Subscription
    private getMyCourse$?: Subscription
    private getCourseByCategory$?: Subscription

    private getCategory$?: Subscription
    course: CourseGetAllRes[] = []
    courseUser: CourseGetAllRes[] = []
    myCourse: CourseGetAllRes[] = []
    categorys: CategoryGetAllRes[] = []

    sortOptions!: SelectItem[];
    selectedSortOption!: string;

    POST_LIMIT: number = 3
    PAGE: number = 1

    POST_LIMIT_PUR: number = 3
    PAGE_PUR: number = 1

    POST_LIMIT_MY: number = 3
    PAGE_MY: number = 1

    role = this.userService.roleCode

    reqParams = this.fb.group({
        category: [''],
        price: ['']
    })

    reqParamsPurchased = this.fb.group({
        category: [''],
        price: ['']
    })

    reqParamsMy = this.fb.group({
        category: [''],
        price: ['']
    })

    constructor(
        private courseService: CourseService,
        private categoryService: CategoryService,
        private fb: FormBuilder,
        private userService: UserService,
        private title : Title

    ) {
        this.sortOptions = [
            { label: 'Ascending', value: 'ASC' },
            { label: 'Descending', value: 'DESC' }
        ];
        this.selectedSortOption = 'ASC';
        this.title.setTitle('Course');
    }


    onScrollAll(): void {
        this.getCourse$ = this.courseService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
            if (res) {
                if (this.course.length) {
                    this.course = [...this.course, ...res]
                } else {
                    this.course = res
                }
            }
        })
    }

    onScrollPur(): void {
        this.getCourseById$ = this.courseService.getByUserId(this.reqParamsPurchased.value.category!, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
            if (res) {
                if (this.courseUser.length) {
                    this.courseUser = [...this.courseUser, ...res]
                } else {
                    this.courseUser = res
                }
            }
        })
    }

    onScrollMy(): void {
        this.getMyCourse$ = this.courseService.getUserCourse(this.reqParamsMy.value.category!, this.reqParamsMy.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
            if (res) {
                if (this.myCourse.length) {
                    this.myCourse = [...this.myCourse, ...res]
                } else {
                    this.myCourse = res
                }
            }
        })
    }

    ngOnInit(): void {

        this.getCourse$ = this.courseService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(result => {
            this.course = result
        })

        this.getCourseById$ = this.courseService.getByUserId(this.reqParamsPurchased.value.category!, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
            this.courseUser = res
        })

        this.getMyCourse$ = this.courseService.getUserCourse(this.reqParamsMy.value.category!, this.reqParamsMy.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
            this.myCourse = res
        })

        this.getCategory$ = this.categoryService.getAll().subscribe(result => {
            this.categorys = result
        })

        this.reqParams.get('category')?.valueChanges.subscribe(res => {
            const temp = res as any

            this.PAGE = 1

            if (!temp.length) {
                this.getCourse$ = this.courseService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(result => {
                    this.course = result
                })
            } else {
                this.getCourse$ = this.courseService.getAll(temp, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
                    this.course = res
                })
            }

        })

        this.reqParams.get('price')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE = 1
            console.log(temp)
            if (!temp.length) {
                this.getCourse$ = this.courseService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
                    this.course = res
                })
            } else {
                this.getCourse$ = this.courseService.getAll(this.reqParams.value.category!, temp, this.POST_LIMIT, this.PAGE++).subscribe(res => {
                    this.course = res
                })
            }
        })

        //Pur Event

        this.reqParamsPurchased.get('category')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE_PUR = 1

            if (!temp.length) {

                this.getCourseById$ = this.courseService.getByUserId(this.reqParamsPurchased.value.category!, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
                    this.courseUser = res
                })
            } else {

                this.getCourseById$ = this.courseService.getByUserId(temp, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
                    this.courseUser = res
                })
            }
        })

        this.reqParamsPurchased.get('price')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE_PUR = 1
            console.log(temp)
            if (!temp.length) {

                this.getCourseById$ = this.courseService.getByUserId(this.reqParamsPurchased.value.category!, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
                    this.courseUser = res
                })
            } else {
                this.getCourseById$ = this.courseService.getByUserId(this.reqParamsPurchased.value.category!, temp, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
                    this.courseUser = res
                })
            }

        })


        //My Event

        this.reqParamsMy.get('category')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE_MY = 1

            if (!temp.length) {

                this.getMyCourse$ = this.courseService.getUserCourse(this.reqParamsMy.value.category!, this.reqParamsMy.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
                    this.myCourse = res
                })
            } else {

                this.getMyCourse$ = this.courseService.getUserCourse(temp, this.reqParamsMy.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
                    this.myCourse = res
                })
            }
        })

        this.reqParamsMy.get('price')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE_MY = 1
            console.log(temp)
            if (!temp.length) {

                this.getMyCourse$ = this.courseService.getUserCourse(this.reqParamsMy.value.category!, this.reqParamsMy.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
                    this.myCourse = res
                })
            } else {
                this.getMyCourse$ = this.courseService.getUserCourse(this.reqParamsMy.value.category!, temp, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
                    this.myCourse = res
                })
            }

        })
    }

    ngOnDestroy(): void {
        //  this.getCourse$?.unsubscribe()
    }

}