import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'projects/common/src/app/component/button/button.module';
import { MenuBarComponent } from 'projects/common/src/app/component/navbar/navbar.component';
import { ResponseInterceptor } from 'projects/common/src/app/interceptor/response.interceptor';
import { TokenInterceptor } from 'projects/common/src/app/interceptor/token.interceptor';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CodeMemberComponent } from './pages/code-member/code-member.component';
import { LoginMemberComponent } from './pages/login/login-member.component';
import { RegisterMemberComponent } from './pages/register/register-member.component';
import { ProfileMemberComponent } from './pages/user-profile/user-profile.component';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent, CodeMemberComponent
  ],
  imports: [
    BrowserModule, TableModule, ButtonModule, ToolbarModule, ToastModule, CommonModule,
    AvatarModule, AvatarGroupModule, MenubarModule, DividerModule, CardModule, InputTextModule, AutoCompleteModule,
    TabViewModule, StepsModule, ImageModule, FileUploadModule, HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class MemberModule { }
