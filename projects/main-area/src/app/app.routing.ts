import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { CanLoad } from "@angular/router";
import { adminRouter } from "projects/admin-area/src/app/app.routing";

import { CodeComponent } from "./pages/code-register/code-register.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";


const appRouter : Routes = [
    
    ...adminRouter
];

@NgModule ({
    imports : [
        RouterModule.forRoot(appRouter)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRouting {

}