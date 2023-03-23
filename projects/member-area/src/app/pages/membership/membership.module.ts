import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "projects/common/src/app/component/button/button.module";
import { SharedModule } from "projects/common/src/app/shared.module";
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';

import { CommonModule } from "@angular/common";

import { RadioButtonModule } from 'primeng/radiobutton';
import { ListMembershipMemberComponent } from "./list-membership/list-membership.component-member";
import { BuyMembershipComponent } from "./buy-membership/buy-membership.component";
import { MembershipRouting } from "./membership.routing";

@NgModule({
    declarations: [
        ListMembershipMemberComponent,
        BuyMembershipComponent
    ],
    imports: [
        SharedModule,
        MembershipRouting, InputNumberModule, CalendarModule, CommonModule, CardModule, InputTextModule, RadioButtonModule
    ]
})

export class MembershipModule {

}