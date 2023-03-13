import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { VoucherComponent } from "./list-voucher/voucher.component";
import { VoucherRouting } from "./voucher.routing";

@NgModule ({
    declarations: [
        VoucherComponent
    ],
    imports: [
       VoucherRouting, CommonModule,TableModule, ButtonModule, ToolbarModule, ToastModule,
       AvatarModule, AvatarGroupModule, MenubarModule
    ]
})
export class VoucherModule {}