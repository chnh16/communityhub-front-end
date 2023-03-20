
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { VoucherGetAllRes } from "projects/common/src/app/pojo/voucher/VoucherGetAllRes";
import { VoucherUpdateReq } from "projects/common/src/app/pojo/voucher/VoucherUpdateReq";
import { VoucherService } from "projects/common/src/app/service/voucher.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-update-position',
    templateUrl: './update-voucher.component.html'
})
export class UpdateVoucherComponent implements OnInit, OnDestroy {

    id!: string
    updateVoucher$?: Subscription
    voucher$?: Subscription

    voucherById!: VoucherGetAllRes

    data = this.fb.group({
        id: [''],
        expiredDate: ['', Validators.required],
        amount: [0, Validators.required],
        voucherCode: ['', Validators.required],
        ver: [0]
    })

    constructor(
        private activatedRouter: ActivatedRoute,
        private voucherService: VoucherService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    onUpdate() {
        const update: VoucherUpdateReq = {
            id: this.data.value.id!,
            voucherCode: this.data.value.voucherCode!,
            expiredDate: this.data.value.expiredDate!,
            amount: this.data.value.amount!,
            ver: this.data.value.ver!
        }
        this.updateVoucher$ = this.voucherService.update(update).subscribe(res => {
            this.router.navigateByUrl(`voucher`)
        })
    }

    ngOnInit(): void {
        this.activatedRouter.params.subscribe(result => {
            const params = result as any
            this.id = params.id
            this.voucher$ = this.voucherService.getById(params.id).subscribe(result1 => {
                this.data.patchValue({
                    id: result1.id,
                    voucherCode: result1.voucherCode,
                    expiredDate: result1.expiredDate,
                    amount: result1.amount,
                    ver: result1.ver
                })
            })

        })
    }

    ngOnDestroy(): void {

    }
}