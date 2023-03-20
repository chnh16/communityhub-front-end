import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CreatePositionComponent } from "./create-position/create-position.component";
import { ListPositionComponent } from "./list-position/list-position.component";
import { UpdatePositionComponent } from "./update-position/update-position.component";


const appRouter: Routes = [
    {
        path: '',
        component: ListPositionComponent,
    },
    {
        path: 'add',
        component: CreatePositionComponent,
    },
    {
        path: 'edit/:id',
        component: UpdatePositionComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRouter)
    ],
    exports: [
        RouterModule
    ]
})

export class PositionRouting {

}