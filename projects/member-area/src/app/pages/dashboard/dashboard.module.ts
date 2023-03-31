import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { TimeAgoPipe } from "projects/common/src/app/pipe/time-ago.pipe";
import { TruncatePipe } from "projects/common/src/app/pipe/truncate-pipe";
import { SharedModule } from "projects/common/src/app/shared.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations : [
        DashboardComponent,
        TimeAgoPipe,
        TruncatePipe
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