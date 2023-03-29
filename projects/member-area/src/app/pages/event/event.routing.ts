import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuyEventComponent } from "./buy-event/buy-event.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { ListEventComponent } from "./list-event/list-event.component";

const eventRoutes: Routes = [
    {
        path: '',
        component: ListEventComponent
    },
    {
        path: 'detail/:id',
        component: EventDetailComponent
    },
    {
        path: 'add',
        component: CreateEventComponent
    },
    {
        path: 'buy-event/:id',
        component: BuyEventComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(eventRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class EventRouting {

}