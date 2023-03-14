import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from './component/button/button.module';
import {MenubarModule} from 'primeng/menubar';
import { MenuBarComponent } from './component/navbar/navbar.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { AppRouting } from 'projects/admin-area/src/app/app.routing';
import { CommonModule } from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent, MenuBarComponent
  ],
  imports: [
    BrowserModule, MenubarModule, AvatarModule, AvatarGroupModule, AppRouting, CommonModule, SidebarModule, ToastModule
  ],
  exports : [
    ButtonModule, MenuBarComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
