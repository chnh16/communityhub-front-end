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
import { CreateVoucherComponent } from "./create-voucher/create-voucher.component";
import { VoucherComponent } from "./list-voucher/voucher.component";
import { VoucherRouting } from "./voucher.routing";
import { ButtonModule as bm } from "projects/common/src/app/component/button/button.module";
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from "@angular/forms";
import { UpdateVoucherComponent } from "./update-voucher/update-voucher.component";

@NgModule({
    declarations: [
        VoucherComponent, CreateVoucherComponent, UpdateVoucherComponent
    ],
    imports: [
        VoucherRouting, CommonModule, TableModule, ButtonModule, ToolbarModule, ToastModule,
        AvatarModule, AvatarGroupModule, MenubarModule, bm, InputNumberModule, CalendarModule,
        ReactiveFormsModule, CardModule
    ]
})
export class VoucherModule { }