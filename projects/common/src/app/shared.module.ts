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
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { PasswordModule } from 'primeng/password';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBarComponent } from "./component/progressbar/app-progressbar.component";
import { CalendarModule } from "primeng/calendar";


@NgModule({
    declarations: [
        MenuBarComponent
    ],
    imports: [
        ButtonModule,
        MenubarModule,
        AvatarModule,
        AvatarGroupModule,
        TieredMenuModule,
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
        SpeedDialModule,
        FileUploadModule,
        InputSwitchModule,
        RadioButtonModule,
        PasswordModule,
        SkeletonModule,
        ProgressBarComponent,
        CalendarModule
    ],
    exports: [
        ButtonModule,
        MenubarModule,
        AvatarModule,
        AvatarGroupModule,
        TieredMenuModule,
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
        SpeedDialModule,
        FileUploadModule,
        InputSwitchModule,
        RadioButtonModule,
        PasswordModule,
        SkeletonModule,
        ProgressBarComponent,
        CalendarModule
    ]
})

export class SharedModule {

}