import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ReportMemberComponent } from "./report-member.component";



const appRouter: Routes = [
    {
        path: '',
        component: ReportMemberComponent
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

export class ReportMemberRouting {

}