import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { adminRouter } from "projects/admin-area/src/app/app.routing";
import { memberRouter } from "projects/member-area/src/app/app.routing";


const appRouter : Routes = [
    ...adminRouter,
    ...memberRouter
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouting {

}