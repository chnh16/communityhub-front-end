import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { VoucherService } from "projects/common/src/app/service/voucher.service";
import { Subscription } from "rxjs";
import { VoucherInsertReq } from "projects/common/src/app/pojo/voucher/VoucherInsertReq";

@Component ({
    selector : 'app-create-voucher',
    templateUrl : './create-voucher.component.html'
})
export class CreateVoucherComponent implements OnInit, OnDestroy {
    data = this.fb.group({
        voucherCode : ['', Validators.required],
        expiredDate : [null, Validators.required],
        amount : [null, Validators.required]
    })
    createVoucher$? : Subscription

    constructor(
        private voucherService : VoucherService,
        private fb : FormBuilder
    ){}

    submit() {
        const insert : VoucherInsertReq = {
            voucherCode : this.data.value.voucherCode!,
            expiredDate : this.data.value.expiredDate!,
            amount : this.data.value.amount!
        }
        this.createVoucher$ = this.voucherService.insert(insert).subscribe(res => {

        })
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.createVoucher$?.unsubscribe()
    }
}