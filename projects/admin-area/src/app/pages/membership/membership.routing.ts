import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CreateMembershipComponent } from "./create-membership/create-membership.component";
import { ListMembershipComponent } from "./list-membership/list-membership.comonent";
import { UpdateMembershipComponent } from "./update-membership/update-membership.component";



const appRouter: Routes = [
    {
        path: '',
        component: ListMembershipComponent,
    },
    {
        path: 'add',
        component: CreateMembershipComponent,
    },
    {
        path: 'edit/:id',
        component: UpdateMembershipComponent,
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

export class MembershipRouting {

}