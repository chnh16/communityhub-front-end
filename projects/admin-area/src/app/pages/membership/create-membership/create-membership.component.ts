import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MembershipInsertReq } from "projects/common/src/app/pojo/membership/MembershipInsertReq";
import { MembershipService } from "projects/common/src/app/service/membership.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-create-membership',
    templateUrl: './create-membership.component.html'
})
export class CreateMembershipComponent implements OnInit, OnDestroy {
    data = this.fb.group({

        membershipName: ['', Validators.required],
        duration: [null, Validators.required],
        amount: [null, Validators.required]
    })
    createMembership$?: Subscription

    constructor(
        private membershipService: MembershipService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    submit() {
        const insert: MembershipInsertReq = {

            membershipName: this.data.value.membershipName!,
            duration: this.data.value.duration!,
            amount: this.data.value.amount!
        }
        this.createMembership$ = this.membershipService.insert(insert).subscribe(res => {
            this.router.navigateByUrl('/membership')
        })
    }
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.createMembership$?.unsubscribe()
    }
}