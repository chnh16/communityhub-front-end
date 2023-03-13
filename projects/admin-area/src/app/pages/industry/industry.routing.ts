import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { ListIndustriComponent } from "./list-industry/list-industry.component";


const appRouter : Routes = [
    {
        path : 'industry',
        component : ListIndustriComponent,
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

export class IndustryRouting {

}