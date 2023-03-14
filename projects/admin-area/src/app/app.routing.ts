import {Component, NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { CanLoad } from "@angular/router";
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";


const appRouter : Routes = [
    {
        path : '',
        loadChildren : () => import('./pages/voucher/voucher.module').then(c => c.VoucherModule),
        component : MenuBarComponent
    },
    {
        path : '',
        loadChildren : () => import('./pages/category/category.module').then(c => c.CategoryModule),
        component : MenuBarComponent
    },
    {
        path : '',
        loadChildren : () => import('./pages/industry/industry.module').then(c => c.IndustryModule),
        component : MenuBarComponent
    },
    {
        path : '',
        loadChildren : () => import('./pages/position/position.module').then(c => c.PositionModule),
        component : MenuBarComponent
    },
    {
        path : '',
        loadChildren : () => import('./pages/membership/membership.module').then(c => c.MembershipModule),
        component : MenuBarComponent
    },
    // {
    //     path : '',
    //     component : MenuBarComponent, children : [{
    //         path : 'voucher',
    //         component : VoucherModule,
    //     }]
    // }

];

@NgModule ({
    imports : [
        RouterModule.forRoot(appRouter)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRouting {

}