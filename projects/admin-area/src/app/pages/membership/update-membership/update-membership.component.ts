
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MembershipService } from "projects/common/src/app/service/membership.service";
import { Subscription } from "rxjs";
import { MembershipGetAllRes } from "../../../pojo/membership/MembershipGetAllRes";
import { MembershipUpdateReq } from "../../../pojo/membership/MembershipUpdateReq";


@Component({
    selector: 'app-update-membership',
    templateUrl: './update-membership.component.html'
})
export class UpdateMembershipComponent implements OnInit, OnDestroy {

    id!: string
    updateMembership$?: Subscription
    membership$?: Subscription

    membershipById!: MembershipGetAllRes

    data = this.fb.group({
        id: [''],
        membershipName: ['', Validators.required],
        duration: [0, Validators.required],
        amount: [0, Validators.required],
        ver: [0]
    })

    constructor(
        private activatedRouter: ActivatedRoute,
        private membershipService: MembershipService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    onUpdate() {
        const update: MembershipUpdateReq = {
            id: this.data.value.id!,
            membershipName: this.data.value.membershipName!,
            duration: this.data.value.duration!,
            amount: this.data.value.amount!,
            ver: this.data.value.ver!
        }
        this.updateMembership$ = this.membershipService.update(update).subscribe(res => {
            this.router.navigateByUrl(`membership`)
        })
    }

    ngOnInit(): void {
        this.activatedRouter.params.subscribe(result => {
            const params = result as any
            this.id = params.id
            this.membership$ = this.membershipService.getById(params.id).subscribe(result1 => {
                this.data.patchValue({
                    id: result1.id,
                    membershipName: result1.membershipName,
                    duration: result1.duration,
                    amount: result1.amount,
                    ver: result1.ver
                })
            })

        })
    }

    ngOnDestroy(): void {

    }
}