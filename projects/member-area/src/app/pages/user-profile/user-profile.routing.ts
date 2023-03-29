import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowProfileComponent } from "./profile/show-profile.component";

const userProfileRoutes : Routes = [
    {
        path : '',
        component : ShowProfileComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(userProfileRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class UserProfileRouting {

}