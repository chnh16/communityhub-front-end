import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MembershipService } from "projects/common/src/app/service/membership.service";
import { Subscription } from "rxjs";
import { MembershipGetAllRes } from "../../../pojo/membership/MembershipGetAllRes";


@Component ({
    selector : 'app-membership',
    templateUrl : './list-membership.component.html'
})
export class ListMembershipComponent implements OnInit, OnDestroy {
    resMembership : MembershipGetAllRes[] = []
    membership$? : Subscription

    constructor(
        private membershipService : MembershipService
    ) {}
    

    ngOnInit(): void {
        this.membership$= this.membershipService.getAll().subscribe(res => {
            this.resMembership = res
        })
    }

    ngOnDestroy(): void {
        this.membership$?.unsubscribe()
    }


}