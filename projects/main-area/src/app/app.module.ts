import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponseInterceptor } from 'projects/common/src/app/interceptor/response.interceptor';
import { TokenInterceptor } from 'projects/common/src/app/interceptor/token.interceptor';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CodeComponent } from './pages/code-register/code-register.component';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'projects/common/src/app/shared.module';
import { AppRouting } from './app.routing';
import { ProfileAdminComponent } from 'projects/admin-area/src/app/pages/admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent, CodeComponent
  ],
  imports: [
   SharedModule, BrowserModule, AppRouting, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
