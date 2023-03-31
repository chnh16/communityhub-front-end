import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileMemberComponent } from "./insert-profile/user-profile.component";
import { RegisterMemberComponent } from "./register-member.component";


const registerMemberRoutes: Routes = [
    {
        path: '',
        component: RegisterMemberComponent
    },
    {
        path: 'profile-member',
        component: ProfileMemberComponent
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(registerMemberRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RegisterMemberRouting {

}