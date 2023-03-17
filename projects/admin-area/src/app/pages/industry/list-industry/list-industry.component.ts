import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IndustryService } from "projects/common/src/app/service/industry.service";
import { Subscription } from "rxjs";
import { IndustryGetAllRes } from "../../../../../../common/src/app/pojo/industry/IndustryGetAllRes";


@Component ({
    selector : 'app-industry',
    templateUrl : './list-industry.component.html'
})
export class ListIndustryComponent implements OnInit, OnDestroy {
    
    resIndustry : IndustryGetAllRes[] = []
    industry$? : Subscription
    industryDelete$? : Subscription

    constructor (
        private industryService : IndustryService
    ){}

    deleteIndustry(industry:IndustryGetAllRes) {
        console.log("Delete")
        this.industryDelete$ = this.industryService.delete(industry.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }

    ngOnInit(): void {
        this.industry$ = this.industryService.getAll().subscribe(res => {
            this.resIndustry = res
        })
    }

    ngOnDestroy(): void {
        this.industry$?.unsubscribe()
    }


}