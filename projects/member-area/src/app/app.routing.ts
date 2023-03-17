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
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { ProfileMemberComponent } from "./pages/user-profile/user-profile.component";
>>>>>>> 4b1762695b4e0e0a4672c3137f408e1a9f6cbc49

export const memberRouter : Routes = [
    {
        path: 'login-member',
        component: LoginMemberComponent
    },
    {
        path: 'register-member',
        component: RegisterMemberComponent
    },
    {
        path : 'profile-member',
        component : ProfileMemberComponent
    },
    {
<<<<<<< HEAD
        path : 'dashboard',
        loadChildren : () => import('./pages/dashboard/dashboard.module').then(d => d.DashboardModule),
        component : MenuBarComponent
    },
    {
        path : 'event',
        loadChildren : () => import('./pages/event/event.module').then(e => e.EventModule),
        component : MenuBarComponent
=======
        path: 'code-member',
        component: CodeMemberComponent
>>>>>>> 4b1762695b4e0e0a4672c3137f408e1a9f6cbc49
    },
    {
        path: 'event',
        loadChildren: () => import('./pages/event/event.module').then(e => e.EventModule),
        component: MenuBarComponent
    },
    {
        path: 'course',
        loadChildren: () => import('./pages/course/course.module').then(c => c.CourseModule),
        component: MenuBarComponent
    }
];

@NgModule ({
    declarations : [
        LoginMemberComponent, RegisterMemberComponent, CodeMemberComponent
    ],
    imports : [
        RouterModule.forRoot(memberRouter),
        SharedModule
    ],
    exports : [
        RouterModule,
        LoginMemberComponent,
        RegisterMemberComponent,
        CodeMemberComponent
    ]
})

export class AppRouting {

}