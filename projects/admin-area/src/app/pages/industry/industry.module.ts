import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { CreateIndustryComponent } from "./create-industry/create-industry.component";
import { IndustryRouting } from "./industry.routing";
import { ListIndustryComponent } from "./list-industry/list-industry.component";
import { ButtonModule as bm } from "projects/common/src/app/component/button/button.module";
import { ReactiveFormsModule } from "@angular/forms";
import { UpdateIndustryComponent } from "./update-industry/update.industry.component";
import { DividerModule } from "primeng/divider";

@NgModule({
    declarations: [
        ListIndustryComponent, CreateIndustryComponent, UpdateIndustryComponent
    ],
    imports: [
        IndustryRouting, CommonModule, TableModule, ButtonModule, ToolbarModule, ToastModule,
        AvatarModule, AvatarGroupModule, MenubarModule, bm, ReactiveFormsModule, CardModule, DividerModule
    ]
})
export class IndustryModule { }