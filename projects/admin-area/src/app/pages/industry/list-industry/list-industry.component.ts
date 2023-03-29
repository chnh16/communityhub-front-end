import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { IndustryService } from "projects/common/src/app/service/industry.service";
import { Subscription } from "rxjs";
import { IndustryGetAllRes } from "../../../../../../common/src/app/pojo/industry/IndustryGetAllRes";


@Component({
    selector: 'app-industry',
    templateUrl: './list-industry.component.html'
})
export class ListIndustryComponent implements OnInit, OnDestroy {

    resIndustry: IndustryGetAllRes[] = []
    industry$?: Subscription
    industryDelete$?: Subscription

    limit: number = 5
    offset: number = 0
    totalData: number = 0

    constructor(
        private industryService: IndustryService
    ) { }

    deleteIndustry(industry: IndustryGetAllRes) {
        console.log("Delete")
        this.industryDelete$ = this.industryService.delete(industry.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }

    loadData(event: LazyLoadEvent) {
        this.getAll(event.first, event.rows)
    }

    getAll(limit: number = this.limit, offset: number = this.offset): void {

        this.limit = limit
        this.offset = offset

        this.industry$ = this.industryService.getIndustry(limit, offset).subscribe(res => {
            const resultData: any = res
            this.resIndustry = resultData.data
            this.totalData = resultData.total
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