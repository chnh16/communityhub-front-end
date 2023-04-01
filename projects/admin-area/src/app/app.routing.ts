import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router"
import { CanLoad } from "@angular/router";
import { AvatarModule } from "primeng/avatar";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { ImageModule } from "primeng/image";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "projects/common/src/app/component/button/button.module";
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { AuthLoginGuard } from "projects/common/src/app/guard/auth-login.guard";
import { AuthLoadGuard } from "projects/common/src/app/guard/auth.load.guard";
import { SharedModule } from "projects/common/src/app/shared.module";
import { ProfileAdminComponent } from "./pages/admin-profile/admin-profile.component";
import { CodeAdminComponent } from "./pages/code-register/code-admin.component";
import { LoginAdminComponent } from "./pages/login/login-admin.component";
import { RegisterAdminComponent } from "./pages/register/register-admin.component";
import { ReportAdminComponent } from "./pages/report/report-admin.component";


export const adminRouter: Routes = [
    {
        path: 'login',
        component: LoginAdminComponent,
        canActivate: [AuthLoginGuard]
    },
    {
        path: 'register',
        component: RegisterAdminComponent
    },
    {
        path: 'profile-admin',
        component : ProfileAdminComponent
    },
    {
        path: 'code',
        component: CodeAdminComponent
    },
    {
        path: 'report-admin',
        loadChildren: () => import('./pages/report/report.module').then(c => c.ReportModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'voucher',
        loadChildren: () => import('./pages/voucher/voucher.module').then(c => c.VoucherModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'category',
        loadChildren: () => import('./pages/category/category.module').then(c => c.CategoryModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'industry',
        loadChildren: () => import('./pages/industry/industry.module').then(c => c.IndustryModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'position',
        loadChildren: () => import('./pages/position/position.module').then(c => c.PositionModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'membership',
        loadChildren: () => import('./pages/membership/membership.module').then(c => c.MembershipModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'article',
        loadChildren: () => import('./pages/article/article.module').then(c => c.ArticleModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'approval',
        loadChildren: () => import('./pages/approval/approval.module').then(c => c.ApprovalModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    }

];

@NgModule({
    declarations: [
        LoginAdminComponent, RegisterAdminComponent, CodeAdminComponent, ProfileAdminComponent
    ],
    imports: [
        RouterModule.forRoot(adminRouter),
        SharedModule
    ],
    exports: [
        RouterModule, LoginAdminComponent, RegisterAdminComponent, CodeAdminComponent, ProfileAdminComponent
    ]
})

export class AppRouting {

}