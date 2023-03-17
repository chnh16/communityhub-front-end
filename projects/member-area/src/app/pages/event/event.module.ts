import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "projects/common/src/app/component/button/button.module";
import { SharedModule } from "projects/common/src/app/shared.module";
import { CreateEventComponent } from "./create-event/create-event.component";
import { EventDetailComponent } from "./event-deail/event-detail.component";
import { EventRouting } from "./event.routing";
import { ListEventComponent } from "./list-event/list-event.component";

@NgModule({
    declarations : [
        ListEventComponent,
        EventDetailComponent,
        CreateEventComponent
    ],
    imports : [
        SharedModule, 
        EventRouting
    ]
})

export class EventModule{

}