import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { ApprovalComponent } from "./approval.component";




const appRouter : Routes = [
    {
        path : '',
        component : ApprovalComponent, 
    },
];

@NgModule ({
    imports : [
        RouterModule.forChild(appRouter)
    ],
    exports : [
        RouterModule
    ]
})

export class ApprovalRouting {

}