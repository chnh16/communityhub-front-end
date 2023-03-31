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

@Component({
    selector: 'app-event',
    templateUrl: './list-event.component.html'
})

export class ListEventComponent implements OnInit, OnDestroy {

    private getEvent$?: Subscription
    private getEventByUser$?: Subscription
    private getMyEvent$?: Subscription

    private getEventByCategory$?: Subscription

    private getCategory$?: Subscription
    event: EventGetAllRes[] = []
    eventUser: EventGetAllRes[] = []
    myEvent: EventGetAllRes[] = []
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

    reqParamsMyEvent = this.fb.group({
        category: [''],
        price: ['']
    })




    constructor(
        private eventService: EventService,
        private categoryService: CategoryService,
        private router: ActivatedRoute,
        private fb: FormBuilder,
        private userService: UserService
    ) {
        this.sortOptions = [
            { label: 'Lower', value: 'ASC' },
            { label: 'Higher', value: 'DESC' }
        ];
        this.selectedSortOption = 'ASC';
    }


    onScrollAll(): void {
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
    onScrollPur(): void {
        this.getEventByUser$ = this.eventService.getByUserId(this.reqParamsPurchased.value.category!, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
            if (res) {
                if (this.eventUser.length) {
                    this.eventUser = [...this.eventUser, ...res]
                } else {
                    this.eventUser = res
                }
            }
        })
    }
    onScrollMy(): void {

        this.getMyEvent$ = this.eventService.getUserEvent(this.reqParamsMyEvent.value.category!, this.reqParamsMyEvent.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
            if (res) {
                if (this.myEvent.length) {
                    this.myEvent = [...this.myEvent, ...res]
                } else {
                    this.myEvent = res
                }
            }
        })
    }

    ngOnInit(): void {

        this.getEvent$ = this.eventService.getAll(this.reqParams.value.category!, this.reqParams.value.price!, this.POST_LIMIT, this.PAGE++).subscribe(res => {
            this.event = res
        })

        this.getEventByUser$ = this.eventService.getByUserId(this.reqParamsPurchased.value.category!, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
            this.eventUser = res
        })

        this.getMyEvent$ = this.eventService.getUserEvent(this.reqParamsMyEvent.value.category!, this.reqParamsMyEvent.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
            this.myEvent = res
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


        // Buy Event

        this.reqParamsPurchased.get('category')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE_PUR = 1

            if (!temp.length) {

                this.getEventByUser$ = this.eventService.getByUserId(this.reqParamsPurchased.value.category!, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
                    this.eventUser = res
                })
            } else {

                this.getEventByUser$ = this.eventService.getByUserId(temp, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
                    this.eventUser = res
                })
            }
        })

        this.reqParamsPurchased.get('price')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE_PUR = 1
            console.log(temp)
            if (!temp.length) {

                this.getEventByUser$ = this.eventService.getByUserId(this.reqParamsPurchased.value.category!, this.reqParamsPurchased.value.price!, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
                    this.eventUser = res
                })
            } else {
                this.getEventByUser$ = this.eventService.getByUserId(this.reqParamsPurchased.value.category!, temp, this.POST_LIMIT_PUR, this.PAGE_PUR++).subscribe(res => {
                    this.eventUser = res
                })
            }

        })

        // My Event

        this.reqParamsMyEvent.get('category')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE_MY = 1

            if (!temp.length) {

                this.getMyEvent$ = this.eventService.getUserEvent(this.reqParamsMyEvent.value.category!, this.reqParamsMyEvent.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
                    this.myEvent = res
                })
            } else {

                this.getMyEvent$ = this.eventService.getUserEvent(temp, this.reqParamsMyEvent.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
                    this.myEvent = res
                })
            }
        })

        this.reqParamsMyEvent.get('price')?.valueChanges.subscribe(res => {
            const temp = res as any
            this.PAGE_MY = 1
            console.log(temp)
            if (!temp.length) {

                this.getMyEvent$ = this.eventService.getUserEvent(this.reqParamsMyEvent.value.category!, this.reqParamsMyEvent.value.price!, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
                    this.myEvent = res
                })
            } else {
                this.getMyEvent$ = this.eventService.getUserEvent(this.reqParamsMyEvent.value.category!, temp, this.POST_LIMIT_MY, this.PAGE_MY++).subscribe(res => {
                    this.myEvent = res
                })
            }

        })
    }

    ngOnDestroy(): void {
        //  this.getEvent$?.unsubscribe()
    }
}