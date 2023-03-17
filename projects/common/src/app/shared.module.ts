import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { ImageModule } from "primeng/image";
import { InputTextModule } from "primeng/inputtext";
import { MenubarModule } from "primeng/menubar";
import { SidebarModule } from "primeng/sidebar";
import { TabViewModule } from "primeng/tabview";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "./component/button/button.module";
import { MenuBarComponent } from "./component/navbar/navbar.component";
import { ScrollTopModule } from 'primeng/scrolltop';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
    declarations : [
        MenuBarComponent
    ],
    imports : [
        ButtonModule,
        MenubarModule, 
        AvatarModule, 
        AvatarGroupModule, 
        CommonModule, 
        SidebarModule, 
        ToastModule,
        CardModule,
        DividerModule,
        ImageModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        TabViewModule,
        ScrollTopModule,
        EditorModule,
        InputTextareaModule,
        SpeedDialModule
    ],
    exports : [
        ButtonModule,
        MenubarModule, 
        AvatarModule, 
        AvatarGroupModule, 
        CommonModule, 
        SidebarModule, 
        ToastModule,
        CardModule,
        DividerModule,
        ImageModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        TabViewModule,
        ScrollTopModule,
        EditorModule,
        InputTextareaModule,
        SpeedDialModule
    ]
})

export class SharedModule{

}