import { NgModule } from "@angular/core";
import { SharedModule } from "projects/common/src/app/shared.module";
import { ProfileMemberComponent } from "./insert-profile/user-profile.component";
import { RegisterMemberComponent } from "./register-member.component";

@NgModule({
    declarations : [
        RegisterMemberComponent,
        ProfileMemberComponent
    ],
    imports : [
        SharedModule
    ]
})

export class RegisterMemberModule{

}