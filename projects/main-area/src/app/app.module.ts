import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponseInterceptor } from 'projects/common/src/app/interceptor/response.interceptor';
import { TokenInterceptor } from 'projects/common/src/app/interceptor/token.interceptor';
import { AppComponent } from './app.component';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'projects/common/src/app/shared.module';
import { AppRouting } from './app.routing';
import { SpinnerComponent } from 'projects/common/src/app/component/spinner/spinner.component';
import { LoadingInterceptor } from 'projects/common/src/app/interceptor/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent, SpinnerComponent
  ],
  imports: [
   SharedModule, BrowserModule, AppRouting, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
