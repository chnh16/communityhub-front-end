import {Component, NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { CanLoad } from "@angular/router";
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CodeAdminComponent } from "./pages/code-register/code-admin.component";
import { LoginAdminComponent } from "./pages/login/login-admin.component";
import { RegisterAdminComponent } from "./pages/register/register-admin.component";


export const adminRouter : Routes = [
    {
        path: 'login',
        component : LoginAdminComponent
    },
    {
        path: 'register',
        component : RegisterAdminComponent
    },
    {
        path: 'code',
        component : CodeAdminComponent
    },
    {
        path : 'voucher',
        loadChildren : () => import('./pages/voucher/voucher.module').then(c => c.VoucherModule),
        component : MenuBarComponent
    },
    {
        path : 'category',
        loadChildren : () => import('./pages/category/category.module').then(c => c.CategoryModule),
        component : MenuBarComponent
    },
    {
        path : 'industry',
        loadChildren : () => import('./pages/industry/industry.module').then(c => c.IndustryModule),
        component : MenuBarComponent
    },
    {
        path : 'position',
        loadChildren : () => import('./pages/position/position.module').then(c => c.PositionModule),
        component : MenuBarComponent
    },
    {
        path : 'membership',
        loadChildren : () => import('./pages/membership/membership.module').then(c => c.MembershipModule),
        component : MenuBarComponent
    }

];

@NgModule ({
    imports : [
        RouterModule.forRoot(adminRouter)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRouting {

}