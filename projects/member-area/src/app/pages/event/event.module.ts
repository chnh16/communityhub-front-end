import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "projects/common/src/app/component/button/button.module";
import { CreateEventComponent } from "./create-event/create-event.component";
import { EventDetailComponent } from "./event-deail/event-detail.component";
import { ListEventComponent } from "./list-event/list-event.component";

@NgModule({
    declarations : [
        ListEventComponent,
        EventDetailComponent,
        CreateEventComponent
    ],
    imports : [
        InputTextModule, CardModule, ButtonModule
    ]
})

export class EventModule{

}