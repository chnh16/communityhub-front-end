import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule as bm } from "projects/common/src/app/component/button/button.module";
import { HttpClientModule } from "@angular/common/http";
import { AppModule } from "../../app.module";
import { ApprovalComponent } from "./approval.component";
import { ApprovalRouting } from "./approval.routing";
import {TabViewModule} from 'primeng/tabview';



@NgModule ({
    declarations: [
        ApprovalComponent
        ],
    imports: [
       ApprovalRouting,CommonModule,TableModule, ButtonModule, ToolbarModule,
       AvatarModule, AvatarGroupModule, MenubarModule, ReactiveFormsModule, bm, 
       HttpClientModule, TabViewModule
    ]
})
export class ApprovalModule {}