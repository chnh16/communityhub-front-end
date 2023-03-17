import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PositionService } from "projects/common/src/app/service/position.service";
import { Subscription } from "rxjs";
import { PositionGetAllRes } from "../../../../../../common/src/app/pojo/position/PositionGetAllRes";


@Component ({
    selector : 'app-position',
    templateUrl : './list-position.component.html'
})
export class ListPositionComponent implements OnInit, OnDestroy {
    
    resPosition : PositionGetAllRes[] = []
    position$? : Subscription

    constructor (
        private positionService : PositionService
    ){}
    
    ngOnInit(): void {
        this.position$ = this.positionService.getAll().subscribe(res => {
            this.resPosition = res
        })
    }

    ngOnDestroy(): void {
        this.position$?.unsubscribe()
    }

}