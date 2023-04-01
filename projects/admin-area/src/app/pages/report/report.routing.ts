import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { ReportAdminComponent } from "./report-admin.component";



const appRouter: Routes = [
    {
        path: '',
        component: ReportAdminComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRouter)
    ],
    exports: [
        RouterModule
    ]
})

export class ReportRouting {

}