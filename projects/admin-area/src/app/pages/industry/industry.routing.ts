import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CreateIndustryComponent } from "./create-industry/create-industry.component";
import { ListIndustryComponent } from "./list-industry/list-industry.component";


const appRouter : Routes = [
    {
        path : 'industry',
        component : ListIndustryComponent,
    },
    {
        path : 'industry/add',
        component : CreateIndustryComponent,
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