import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CategoryGetAllRes } from "projects/common/src/app/pojo/category/CategoryGetAllRes";
import { EventGetAllRes } from "projects/common/src/app/pojo/event/EventGetAllRes";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { EventService } from "projects/common/src/app/service/event.service";
import { Subscription } from "rxjs";
import { SelectItem } from 'primeng/api';
import { UserService } from "projects/common/src/app/service/user.service";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-event',
    templateUrl: './list-event.component.html'
})

export class ListEventComponent implements OnInit, OnDestroy {

    private getEvent$?: Subscription
    private getEventByCategory$?: Subscription

    private getCategory$?: Subscription
    event: EventGetAllRes[] = []
    categorys: CategoryGetAllRes[] = []

    sortOptions!: SelectItem[];
    selectedSortOption!: string;

    POST_LIMIT: number = 4
    PAGE: number = 1

    role = this.userService.roleCode

    reqParams = this.fb.group({
        category: [''],
        price: ['']
    })

    constructor(
        private eventService: EventService,
        private categoryService: CategoryService,
        private fb: FormBuilder,
        private userService: UserService,
        private title : Title
    ) {
        this.sortOptions = [
            { label: 'Lower', value: 'ASC' },
            { label: 'Higher', value: 'DESC' }
        ];
        this.selectedSortOption = 'ASC';
        this.title.setTitle('Event');
    }


    onScroll(): void {
        this.getEvent$ = this.eventService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
            if (res) {
                if (this.event.length) {
                    this.event = [...this.event, ...res]
                } else {
                    this.event = res
                }
            }
        })
    }

    ngOnInit(): void {

        this.getEvent$ = this.eventService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
            this.event = res
        })

        this.getCategory$ = this.categoryService.getAll().subscribe(result => {
            this.categorys = result
        })

        this.reqParams.get('category')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE = 1

            if (!temp.length) {
                this.getEvent$ = this.eventService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
                    this.event = res
                })
            } else {
                this.getEvent$ = this.eventService.getAll(temp, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
                    this.event = res
                })
            }


        })

        this.reqParams.get('price')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE = 1
            console.log(temp)
            if (!temp.length) {
                this.getEvent$ = this.eventService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
                    this.event = res
                })
            } else {
                this.getEvent$ = this.eventService.getAll(this.reqParams.value.category!, temp, this.POST_LIMIT, this.PAGE++).subscribe(res => {
                    this.event = res
                })
            }


        })
    }

    ngOnDestroy(): void {
        //  this.getEvent$?.unsubscribe()
    }
}