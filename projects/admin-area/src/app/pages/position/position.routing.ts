import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { ListPositionComponent } from "./list-position/list-position.component";


const appRouter : Routes = [
    {
        path : 'position',
        component : ListPositionComponent,
    }
];

@NgModule ({
    imports : [
        RouterModule.forChild(appRouter)
    ],
    exports : [
        RouterModule
    ]
})

export class PositionRouting {

}