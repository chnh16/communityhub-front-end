import { Component, OnDestroy, OnInit } from "@angular/core";
import { MembershipGetAllRes } from "projects/common/src/app/pojo/membership/MembershipGetAllRes";
import { MembershipService } from "projects/common/src/app/service/membership.service";
import { RouterService } from "projects/common/src/app/service/router.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-list-membership',
    templateUrl: './list-membership-member.component.html'
})

export class ListMembershipMemberComponent implements OnInit {
    resMembership: MembershipGetAllRes[] = []
    membership$?: Subscription


    constructor(
        private membershipService: MembershipService,
        private routerService : RouterService
    ) { }


    ngOnInit(): void {
        this.membership$ = this.membershipService.getAll().subscribe(res => {
            this.resMembership = res
        })
    }

    ngOnDestroy(): void {
        this.membership$?.unsubscribe()
    }
}