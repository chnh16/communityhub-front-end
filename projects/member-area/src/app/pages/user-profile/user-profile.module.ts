import { NgModule } from "@angular/core";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ShowProfileComponent } from "./profile/show-profile.component";

@NgModule({
    declarations : [
        ShowProfileComponent,
        EditProfileComponent
    ]
})

export class UserProfileModule{

}