import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResponseInterceptor } from 'projects/common/src/app/interceptor/response.interceptor';
import { TokenInterceptor } from 'projects/common/src/app/interceptor/token.interceptor';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { VoucherComponent } from './pages/voucher/list-voucher/voucher.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { AppRouting } from './app.routing';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {MenubarModule} from 'primeng/menubar';
import { MenuBarComponent } from 'projects/common/src/app/component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, MenuBarComponent
  ],
  imports: [
    BrowserModule, TableModule, ButtonModule, ToolbarModule, ToastModule, CommonModule, AppRouting,
    AvatarModule, AvatarGroupModule, MenubarModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : ResponseInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
