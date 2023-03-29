import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { PositionService } from "projects/common/src/app/service/position.service";
import { Subscription } from "rxjs";
import { PositionGetAllRes } from "../../../../../../common/src/app/pojo/position/PositionGetAllRes";


@Component({
    selector: 'app-position',
    templateUrl: './list-position.component.html'
})
export class ListPositionComponent implements OnInit, OnDestroy {

    resPosition: PositionGetAllRes[] = []
    position$?: Subscription
    positionDelete$?: Subscription

    limit: number = 5
    offset: number = 0
    totalData: number = 0

    constructor(
        private positionService: PositionService
    ) { }

    deletePosition(position: PositionGetAllRes) {
        console.log("Delete")
        this.positionDelete$ = this.positionService.delete(position.id).subscribe(res => {
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

        this.position$ = this.positionService.getPosition(limit, offset).subscribe(res => {
            const resultData: any = res
            this.resPosition = resultData.data
            this.totalData = resultData.total
        })
    }

    ngOnInit(): void {
        this.position$ = this.positionService.getAll().subscribe(res => {
            this.resPosition = res
        })
    }

    ngOnDestroy(): void {
        this.position$?.unsubscribe()
    }

}