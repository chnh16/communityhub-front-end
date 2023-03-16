import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IndustryService } from "projects/common/src/app/service/industry.service";
import { Subscription } from "rxjs";
import { IndustryGetAllRes } from "../../../pojo/industry/IndustryGetAllRes";


@Component ({
    selector : 'app-industry',
    templateUrl : './list-industry.component.html'
})
export class ListIndustryComponent implements OnInit, OnDestroy {
    
    resIndustry : IndustryGetAllRes[] = []
    industry$? : Subscription

    constructor (
        private industryService : IndustryService
    ){}

    ngOnInit(): void {
        this.industry$ = this.industryService.getAll().subscribe(res => {
            this.resIndustry = res
        })
    }

    ngOnDestroy(): void {
        this.industry$?.unsubscribe()
    }


}