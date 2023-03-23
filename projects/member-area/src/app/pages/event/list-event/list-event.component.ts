import { Component, OnInit } from "@angular/core";
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

export class ListEventComponent implements OnInit {

    private getEvent$?: Subscription
    private getEventByCategory$?: Subscription

    private getCategory$?: Subscription
    event: EventGetAllRes[] = []
    categorys: CategoryGetAllRes[] = []

    sortOptions!: SelectItem[];
    selectedSortOption!: string;

    role = this.userService.roleCode

    reqParams = this.fb.group({
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

    ngOnInit(): void {

        this.getEvent$ = this.eventService.getAll(this.reqParams.value.category!, this.reqParams.value.price!).subscribe(result => {
            this.event = result
        })

        this.getCategory$ = this.categoryService.getAll().subscribe(result => {
            this.categorys = result
        })

        this.reqParams.get('category')?.valueChanges.subscribe(res => {
            const temp = res as any
            console.log(res)
            this.getEvent$ = this.eventService.getAll(temp, this.reqParams.value.price!).subscribe(res => {
                this.event = res
            })
        })
    }
}