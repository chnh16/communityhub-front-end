import { CommonModule } from "@angular/common";
import {Component, NgModule} from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router"
import { CanLoad } from "@angular/router";
import { AvatarModule } from "primeng/avatar";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { ImageModule } from "primeng/image";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "projects/common/src/app/component/button/button.module";
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { SharedModule } from "projects/common/src/app/shared.module";
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
    declarations : [
        LoginAdminComponent, RegisterAdminComponent, CodeAdminComponent
    ],
    imports : [
        RouterModule.forRoot(adminRouter),
        SharedModule
    ],
    exports : [
        RouterModule, LoginAdminComponent, RegisterAdminComponent, CodeAdminComponent
    ]
})

export class AppRouting {

}