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
import {TabViewModule} from 'primeng/tabview';
import { CreateArticleComponent } from "./create-article/create-article.component";
import { CreateArticleRouting } from "./article.routing";
import { CardModule } from "primeng/card";
import { FileUploadModule } from "primeng/fileupload";
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from 'primeng/editor';


@NgModule ({
    declarations: [
        CreateArticleComponent
        ],
    imports: [
       CreateArticleRouting,CommonModule,TableModule, ButtonModule, ToolbarModule,
       AvatarModule, AvatarGroupModule, MenubarModule, ReactiveFormsModule, bm, 
       HttpClientModule, TabViewModule, CardModule, FileUploadModule, InputTextareaModule,
       EditorModule
    ]
})
export class CreateArticleModule {}