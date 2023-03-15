import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResponseInterceptor } from 'projects/common/src/app/interceptor/response.interceptor';
import { TokenInterceptor } from 'projects/common/src/app/interceptor/token.interceptor';
import {AvatarModule} from 'primeng/avatar';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {DividerModule} from 'primeng/divider';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'projects/common/src/app/component/button/button.module';
import { RegisterComponent } from './pages/register/register.component';
import {StepsModule} from 'primeng/steps';
import { CodeComponent } from './pages/code-register/code-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {TabViewModule} from 'primeng/tabview';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ImageModule} from 'primeng/image';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent, CodeComponent, DashboardComponent
  ],
  imports: [
    BrowserModule, CommonModule, AppRouting, BrowserAnimationsModule, AutoCompleteModule,
    InputTextModule, CardModule, ButtonModule, StepsModule, AvatarModule, DividerModule, TabViewModule, AvatarGroupModule, ToastModule,
    ImageModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : ResponseInterceptor, multi : true}, 
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
