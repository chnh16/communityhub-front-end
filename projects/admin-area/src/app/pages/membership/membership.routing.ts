import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CreateMembershipComponent } from "./create-membership/create-membership.component";
import { ListMembershipComponent } from "./list-membership/list-membership.comonent";



const appRouter : Routes = [
    {
        path : 'membership',
        component : ListMembershipComponent,
    },
    {
        path : 'membership/add',
        component : CreateMembershipComponent,
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

export class MembershipRouting {

}