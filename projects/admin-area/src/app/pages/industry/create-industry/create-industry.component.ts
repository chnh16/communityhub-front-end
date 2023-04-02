import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IndustryInsertReq } from "projects/common/src/app/pojo/industry/IndustryInsertReq";
import { IndustryService } from "projects/common/src/app/service/industry.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-create-industry',
    templateUrl: './create-industry.component.html'
})
export class CreateIndustryComponent implements OnInit, OnDestroy {
    data = this.fb.group({

        industryName: ['', Validators.required]
    })
    createIndustry$?: Subscription

    constructor(
        private industryService: IndustryService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    submit() {
        const insert: IndustryInsertReq = {

            industryName: this.data.value.industryName!
        }
        this.createIndustry$ = this.industryService.insert(insert).subscribe(res => {
            this.router.navigateByUrl('/industry')
        })
    }
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.createIndustry$?.unsubscribe()
    }


}