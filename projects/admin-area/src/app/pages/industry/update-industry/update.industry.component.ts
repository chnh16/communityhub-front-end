
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IndustryUpdateReq } from "projects/common/src/app/pojo/industry/IndustryUpdateReq";
import { IndustryService } from "projects/common/src/app/service/industry.service";
import { Subscription } from "rxjs";
import { IndustryGetAllRes } from "../../../pojo/industry/IndustryGetAllRes";



@Component({
    selector: 'app-update-industry',
    templateUrl: './update-industry.component.html'
})
export class UpdateIndustryComponent implements OnInit, OnDestroy {

    id!: string
    updateIndustry$?: Subscription
    industry$?: Subscription

    industryById!: IndustryGetAllRes

    data = this.fb.group({
        id: [''],
        industryName: ['', Validators.required],
        ver: [0]
    })

    constructor(
        private activatedRouter: ActivatedRoute,
        private industryService: IndustryService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    onUpdate() {
        const update: IndustryUpdateReq = {
            id: this.data.value.id!,
            industryName: this.data.value.industryName!,
            ver: this.data.value.ver!
        }
        this.updateIndustry$ = this.industryService.update(update).subscribe(res => {
            this.router.navigateByUrl(`industry`)
        })
    }

    ngOnInit(): void {
        this.activatedRouter.params.subscribe(result => {
            const params = result as any
            this.id = params.id
            this.industry$ = this.industryService.getById(params.id).subscribe(result1 => {
                this.data.patchValue({
                    id: result1.id,
                    industryName: result1.industryName,
                    ver: result1.ver
                })
            })

        })
    }

    ngOnDestroy(): void {

    }
}