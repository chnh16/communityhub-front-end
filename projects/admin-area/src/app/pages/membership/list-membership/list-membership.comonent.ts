import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { MembershipService } from "projects/common/src/app/service/membership.service";
import { Subscription } from "rxjs";
import { MembershipGetAllRes } from "../../../../../../common/src/app/pojo/membership/MembershipGetAllRes";
import { Title } from "@angular/platform-browser";


@Component({
    selector: 'app-membership',
    templateUrl: './list-membership.component.html'
})
export class ListMembershipComponent implements OnInit, OnDestroy {
    resMembership: MembershipGetAllRes[] = []
    membership$?: Subscription
    membershipDelete$?: Subscription

    limit: number = 5
    offset: number = 0
    totalData: number = 0

    constructor(
        private membershipService: MembershipService,
        private title : Title
    ) {
        this.title.setTitle("Membership")
     }

    deleteMembership(membership: MembershipGetAllRes) {
        console.log("Delete")
        this.membershipDelete$ = this.membershipService.delete(membership.id).subscribe(res => {
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

        this.membership$ = this.membershipService.getMembership(limit, offset).subscribe(res => {
            const resultData: any = res
            this.resMembership = resultData.data
            this.totalData = resultData.total
        })
    }

    ngOnInit(): void {
        this.membership$ = this.membershipService.getAll().subscribe(res => {
            this.resMembership = res
        })
    }

    ngOnDestroy(): void {
        this.membership$?.unsubscribe()
    }


}