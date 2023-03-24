import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "projects/common/src/app/shared.module";
import { EditProfileComponent } from "./edit-profile.component";

@NgModule({
    declarations : [
        EditProfileComponent
    ],
    imports : [
        SharedModule,
        RouterModule.forChild([
            {path : '', component : EditProfileComponent}
        ])
    ]
})

export class EditProfileModule{

}