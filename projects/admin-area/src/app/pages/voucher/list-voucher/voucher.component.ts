import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VoucherGetAllRes } from "projects/common/src/app/pojo/voucher/VoucherGetAllRes";
import { VoucherService } from "projects/common/src/app/service/voucher.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-voucher',
    templateUrl: './voucher.component.html'
})
export class VoucherComponent implements OnInit, OnDestroy {

    resVoucher: VoucherGetAllRes[] = []
    voucher$?: Subscription
    voucherDelete$?: Subscription

    constructor(
        private voucherService: VoucherService
    ) { }


    ngOnInit(): void {
        this.voucher$ = this.voucherService.getAll().subscribe(res => {
            this.resVoucher = res
        })
    }

    deleteVoucher(voucher: VoucherGetAllRes) {
        console.log("Delete")
        this.voucherDelete$ = this.voucherService.delete(voucher.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }

    ngOnDestroy(): void {
        this.voucher$?.unsubscribe()
    }

}