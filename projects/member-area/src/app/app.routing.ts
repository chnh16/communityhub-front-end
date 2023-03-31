import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { SharedModule } from "projects/common/src/app/shared.module";
import { UserVerificationComponent } from "./pages/user-verification/user-verification.component";
import { LoginMemberComponent } from "./pages/login/login-member.component";
import { ProfileMemberComponent } from "./pages/register/insert-profile/user-profile.component";
import { AuthLoadGuard } from "projects/common/src/app/guard/auth.load.guard";
import { AuthLoginGuard } from "projects/common/src/app/guard/auth-login.guard";


export const memberRouter: Routes = [
    {
        path: 'login-member',
        component: LoginMemberComponent,
        canActivate: [AuthLoginGuard]
    },
    {
        path: 'register-member',
        loadChildren : () => import('./pages/register/register-member.module').then(r => r.RegisterMemberModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(d => d.DashboardModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'memberships',
        loadChildren: () => import('./pages/membership/membership.module').then(e => e.MembershipModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'event',
        loadChildren: () => import('./pages/event/event.module').then(e => e.EventModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'user-verification',
        component: UserVerificationComponent
    },
    {
        path: 'course',
        loadChildren: () => import('./pages/course/course.module').then(c => c.CourseModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path : 'profile/:id',
        loadChildren: () => import('./pages/user-profile/edit-profile/edit-profile.module').then(e => e.EditProfileModule),
        component : MenuBarComponent
    },
    {
        path: 'report-member',
        loadChildren: () => import('./pages/report/report.module').then(c => c.ReportMemberModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
    {
        path: 'article-member',
        loadChildren: () => import('./pages/article/article-member.module').then(c => c.ArticleMemberModule),
        component: MenuBarComponent,
        canLoad : [AuthLoadGuard]
    },
];

@NgModule({
    declarations: [
        LoginMemberComponent, UserVerificationComponent
    ],
    imports: [
        RouterModule.forRoot(memberRouter),
        SharedModule
    ],
    exports: [
        RouterModule,
        LoginMemberComponent,
        UserVerificationComponent
    ]
})

export class AppRouting {

}