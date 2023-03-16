import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { CreatePositionComponent } from "./create-position/create-position.component";
import { ListPositionComponent } from "./list-position/list-position.component";
import { PositionRouting } from "./position.routing";
import { ButtonModule as bm } from "projects/common/src/app/component/button/button.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule ({
    declarations: [
        ListPositionComponent, CreatePositionComponent
    ],
    imports: [
       PositionRouting, CommonModule,TableModule, ButtonModule, ToolbarModule, ToastModule,
       AvatarModule, AvatarGroupModule, MenubarModule, bm, ReactiveFormsModule
    ]
})
export class PositionModule {}