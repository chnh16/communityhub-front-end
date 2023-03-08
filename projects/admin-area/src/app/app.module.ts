import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ResponseInterceptor } from 'projects/common/src/app/interceptor/response.interceptor';
import { TokenInterceptor } from 'projects/common/src/app/interceptor/token.interceptor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : ResponseInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
