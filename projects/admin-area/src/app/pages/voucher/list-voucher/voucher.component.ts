import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
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

    limit: number = 5
    offset: number = 0
    totalData: number = 0


    constructor(
        private voucherService: VoucherService
    ) { }

    deleteVoucher(voucher: VoucherGetAllRes) {
        console.log("Delete")
        this.voucherDelete$ = this.voucherService.delete(voucher.id).subscribe(res => {
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

        this.voucher$ = this.voucherService.getVoucher(limit, offset).subscribe(res => {
            const resultData: any = res
            this.resVoucher = resultData.data
            this.totalData = resultData.total
        })
    }

    ngOnInit(): void {
        this.voucher$ = this.voucherService.getAll().subscribe(res => {
            this.resVoucher = res
        })
    }

    ngOnDestroy(): void {
        this.voucher$?.unsubscribe()
    }

}