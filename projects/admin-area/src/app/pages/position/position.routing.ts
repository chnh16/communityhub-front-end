import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { CreatePositionComponent } from "./create-position/create-position.component";
import { ListPositionComponent } from "./list-position/list-position.component";


const appRouter : Routes = [
    {
        path : 'position',
        component : ListPositionComponent,
    },
    {
        path : 'position/add',
        component : CreatePositionComponent,
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