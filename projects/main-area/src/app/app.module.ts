import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResponseInterceptor } from 'projects/common/src/app/interceptor/response.interceptor';
import { TokenInterceptor } from 'projects/common/src/app/interceptor/token.interceptor';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CodeComponent } from './pages/code-register/code-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'projects/common/src/app/shared.module';
import { AppRouting } from './app.routing';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent, CodeComponent, DashboardComponent
  ],
  imports: [
   SharedModule, BrowserModule, AppRouting
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : ResponseInterceptor, multi : true}, 
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
