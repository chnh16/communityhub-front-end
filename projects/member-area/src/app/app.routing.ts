import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
// import { LoginComponent } from "./pages/login/login.component"; 
// import { OutLoadGuard } from "./guard/out-load.guard"
import { CanLoad } from "@angular/router";
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { SharedModule } from "projects/common/src/app/shared.module";
import { CodeMemberComponent } from "./pages/code-member/code-member.component";
import { LoginMemberComponent } from "./pages/login/login-member.component";
import { RegisterMemberComponent } from "./pages/register/register-member.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileMemberComponent } from "./pages/user-profile/user-profile.component";


export const memberRouter: Routes = [
    {
        path: 'login-member',
        component: LoginMemberComponent
    },
    {
        path: 'register-member',
        component: RegisterMemberComponent
    },
    {
        path: 'profile-member',
        component: ProfileMemberComponent
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(d => d.DashboardModule),
        component: MenuBarComponent
    },
    {
        path: 'memberships',
        loadChildren: () => import('./pages/membership/membership.module').then(e => e.MembershipModule),
        component: MenuBarComponent
    },
    {
        path: 'event',
        loadChildren: () => import('./pages/event/event.module').then(e => e.EventModule),
        component: MenuBarComponent
    },
    {
        path: 'code-member',
        component: CodeMemberComponent
    },
    {
        path: 'course',
        loadChildren: () => import('./pages/course/course.module').then(c => c.CourseModule),
        component: MenuBarComponent
    }
];

@NgModule({
    declarations: [
        LoginMemberComponent, RegisterMemberComponent, CodeMemberComponent, ProfileMemberComponent
    ],
    imports: [
        RouterModule.forRoot(memberRouter),
        SharedModule
    ],
    exports: [
        RouterModule,
        LoginMemberComponent,
        RegisterMemberComponent,
        CodeMemberComponent,
        ProfileMemberComponent
    ]
})

export class AppRouting {

}