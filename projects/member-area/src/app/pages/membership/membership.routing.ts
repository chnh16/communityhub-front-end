import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuyMembershipComponent } from "./buy-membership/buy-membership.component";
import { ListMembershipMemberComponent } from "./list-membership/list-membership.component-member";


const membershipRoutes: Routes = [
    {
        path: '',
        component: ListMembershipMemberComponent
    },
    {
        path: 'buy-membership/:id',
        component: BuyMembershipComponent
    },

]

@NgModule({
    imports: [
        RouterModule.forChild(membershipRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MembershipRouting {

}