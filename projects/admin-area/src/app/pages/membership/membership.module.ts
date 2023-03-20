import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";
import { CreateMembershipComponent } from "./create-membership/create-membership.component";
import { ListMembershipComponent } from "./list-membership/list-membership.comonent";
import { MembershipRouting } from "./membership.routing";
import { ButtonModule as bm } from "projects/common/src/app/component/button/button.module";
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from "@angular/forms";
import { UpdateMembershipComponent } from "./update-membership/update-membership.component";

@NgModule({
    declarations: [
        ListMembershipComponent, CreateMembershipComponent, UpdateMembershipComponent
    ],
    imports: [
        MembershipRouting, CommonModule, TableModule, ButtonModule, ToolbarModule, ToastModule,
        AvatarModule, AvatarGroupModule, MenubarModule, bm, InputNumberModule, ReactiveFormsModule, CalendarModule, CardModule
    ]
})
export class MembershipModule { }