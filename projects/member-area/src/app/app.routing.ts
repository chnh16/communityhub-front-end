import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
// import { LoginComponent } from "./pages/login/login.component"; 
// import { OutLoadGuard } from "./guard/out-load.guard"
import { CanLoad } from "@angular/router";
import { CodeMemberComponent } from "./pages/code-member/code-member.component";
import { LoginMemberComponent } from "./pages/login/login-member.component";
import { RegisterMemberComponent } from "./pages/register/register-member.component";
import { ProfileMemberComponent } from "./pages/user-profile/user-profile.component";

const appRouter : Routes = [
    {
        path : 'login-member',
        component : LoginMemberComponent
    },
    {
        path : 'register-member',
        component : RegisterMemberComponent
    },
    {
        path : 'code-member',
        component : CodeMemberComponent
    },
    {
        path : 'profile-member',
        component : ProfileMemberComponent
    }

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