import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { CategoryRouting } from "./category.routing";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { ListCategoryComponent } from "./list-category/list-category.component";


@NgModule ({
    declarations: [
        ListCategoryComponent, CreateCategoryComponent
    ],
    imports: [
       CategoryRouting, CommonModule,TableModule, ButtonModule, ToolbarModule, ToastModule,
       AvatarModule, AvatarGroupModule, MenubarModule
    ]
})
export class CategoryModule {}