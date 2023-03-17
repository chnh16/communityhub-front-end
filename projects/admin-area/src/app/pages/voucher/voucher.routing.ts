import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CreateVoucherComponent } from "./create-voucher/create-voucher.component";
import { VoucherComponent } from "./list-voucher/voucher.component";


const appRouter : Routes = [
    {
        path : '',
        component : VoucherComponent, 
    },
    {
        path : 'add',
        component : CreateVoucherComponent
    }
];

@NgModule ({
    imports : [
        RouterModule.forChild(appRouter)
    ],
    exports : [
        RouterModule
    ]
})

export class VoucherRouting {

}