import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { CardModule } from "primeng/card";
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { ButtonModule as bm } from "projects/common/src/app/component/button/button.module";
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from "@angular/forms";
import { ReportMemberComponent } from "./report-member.component";
import { ReportMemberRouting } from "./report.routing";
import { DropdownModule } from "primeng/dropdown";

@NgModule({
    declarations: [
        ReportMemberComponent
    ],
    imports: [
        ReportMemberRouting, CommonModule, TableModule, ButtonModule, ToolbarModule, ToastModule,
        AvatarModule, AvatarGroupModule, MenubarModule, bm, InputNumberModule, CalendarModule,
        ReactiveFormsModule, CardModule, DropdownModule
    ]
})
export class ReportMemberModule { }