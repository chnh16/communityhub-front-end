import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResponseInterceptor } from 'projects/common/src/app/interceptor/response.interceptor';
import { TokenInterceptor } from 'projects/common/src/app/interceptor/token.interceptor';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { AppRouting } from './app.routing';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MenubarModule} from 'primeng/menubar';
import { MenuBarComponent } from 'projects/common/src/app/component/navbar/navbar.component';
import { LoginAdminComponent } from './pages/login/login-admin.component';
import {DividerModule} from 'primeng/divider';
import { ButtonModule } from 'projects/common/src/app/component/button/button.module';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { ImageModule } from 'primeng/image';
import { RegisterAdminComponent } from './pages/register/register-admin.component';
import { CodeAdminComponent } from './pages/code-register/code-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CategoryModule } from './pages/category/category.module';




@NgModule({
  declarations: [
    AppComponent, LoginAdminComponent, RegisterAdminComponent, CodeAdminComponent
  ],
  imports: [
    BrowserModule, TableModule, ButtonModule, ToolbarModule, ToastModule, CommonModule, AppRouting,
    AvatarModule, AvatarGroupModule, MenubarModule, DividerModule, CardModule, InputTextModule, AutoCompleteModule,
    TabViewModule, StepsModule, ImageModule, FormsModule, ReactiveFormsModule, HttpClientModule, CategoryModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : ResponseInterceptor, multi : true},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
