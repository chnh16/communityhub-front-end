import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MembershipService } from "projects/common/src/app/service/membership.service";
import { Subscription } from "rxjs";
import { MembershipGetAllRes } from "../../../../../../common/src/app/pojo/membership/MembershipGetAllRes";


@Component({
    selector: 'app-membership',
    templateUrl: './list-membership.component.html'
})
export class ListMembershipComponent implements OnInit, OnDestroy {
    resMembership: MembershipGetAllRes[] = []
    membership$?: Subscription
    membershipDelete$?: Subscription

    constructor(
        private membershipService: MembershipService
    ) { }


    ngOnInit(): void {
        this.membership$ = this.membershipService.getAll().subscribe(res => {
            this.resMembership = res
        })
    }

    deleteMembership(membership: MembershipGetAllRes) {
        console.log("Delete")
        this.membershipDelete$ = this.membershipService.delete(membership.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }

    ngOnDestroy(): void {
        this.membership$?.unsubscribe()
    }


}