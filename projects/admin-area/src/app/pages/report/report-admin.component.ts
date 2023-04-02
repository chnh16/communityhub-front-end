import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { BASE_URL } from "projects/common/src/app/constant/BaseUrl";
import { UserService } from "projects/common/src/app/service/user.service";
import { convertUTCToLocalDateISO } from "projects/common/src/app/util/date.util";
import { Subscription } from "rxjs";



@Component ({
    selector : 'app-article',
    templateUrl : './report-admin.component.html'
})
export class ReportAdminComponent implements OnInit, OnDestroy{
    baseUrl : string = BASE_URL
    adminReport$?: Subscription
    userId : any

    constructor(
        private fb: FormBuilder,
        private title: Title,
        private userService : UserService
    ) {
        this.title.setTitle("Report Admin")
    }

    data = this.fb.group({
        startDate : ['', Validators.required],
        endDate : ['', Validators.required],
        startDateLocal : ['', Validators.required],
        endDateLocal : ['', Validators.required]
    })


    ngOnDestroy(): void {
        this.adminReport$?.unsubscribe()
    }

    ngOnInit(): void {
        this.userId = this.userService.userId

        this.data.get('startDate')?.valueChanges.subscribe(res => {
            this.data.patchValue({
                startDateLocal : convertUTCToLocalDateISO(res)
            })
        })

        this.data.get('endDate')?.valueChanges.subscribe(res => {
            this.data.patchValue({
                endDateLocal : convertUTCToLocalDateISO(res)
            })
        })
    }
}