import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { CreateMembershipComponent } from "./create-membership/create-membership.component";
import { ListMembershipComponent } from "./list-membership/list-membership.comonent";
import { MembershipRouting } from "./membership.routing";
;


@NgModule ({
    declarations: [
        ListMembershipComponent, CreateMembershipComponent
    ],
    imports: [
        MembershipRouting, CommonModule,TableModule, ButtonModule, ToolbarModule, ToastModule,
       AvatarModule, AvatarGroupModule, MenubarModule
    ]
})
export class MembershipModule {}