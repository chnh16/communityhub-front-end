import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { IndustryRouting } from "./industry.routing";
import { ListIndustriComponent } from "./list-industry/list-industry.component";


@NgModule ({
    declarations: [
        ListIndustriComponent
    ],
    imports: [
       IndustryRouting, CommonModule,TableModule, ButtonModule, ToolbarModule, ToastModule,
       AvatarModule, AvatarGroupModule, MenubarModule
    ]
})
export class IndustryModule {}