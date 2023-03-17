import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateEventComponent } from "./create-event/create-event.component";
import { EventDetailComponent } from "./event-deail/event-detail.component";
import { ListEventComponent } from "./list-event/list-event.component";

const eventRoutes : Routes = [
    {
        path : '',
        component : ListEventComponent
    },
    {
        path : 'detail',
        component : EventDetailComponent
    },
    {
        path : 'add',
        component : CreateEventComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(eventRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class EventRouting{

}