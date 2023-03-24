import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
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
        ]),
        InfiniteScrollModule
    ]
})

export class DashboardModule{

}