import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "projects/common/src/app/shared.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations : [
        DashboardComponent
    ],
    imports : [
        SharedModule,
        RouterModule.forChild([
            {path : '', component : DashboardComponent}
        ])
    ]
})

export class DashboardModule{

}