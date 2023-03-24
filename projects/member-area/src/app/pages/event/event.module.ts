import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "projects/common/src/app/component/button/button.module";
import { SharedModule } from "projects/common/src/app/shared.module";
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { CreateEventComponent } from "./create-event/create-event.component";
import { EventDetailComponent } from "./event-deail/event-detail.component";
import { EventRouting } from "./event.routing";
import { ListEventComponent } from "./list-event/list-event.component";
import { CommonModule } from "@angular/common";
import { BuyEventComponent } from "./buy-event/buy-event.component";
import { RadioButtonModule } from 'primeng/radiobutton';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
    declarations: [
        ListEventComponent,
        EventDetailComponent,
        CreateEventComponent,
        BuyEventComponent
    ],
    imports: [
        SharedModule,
        EventRouting, InputNumberModule, CalendarModule, CommonModule, CardModule, InputTextModule, RadioButtonModule, InfiniteScrollModule
    ]
})

export class EventModule {

}