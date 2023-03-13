import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './back-button/back-button.component';
import { RoutingButtonComponent } from './routing-button/routing-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import {ButtonModule as bm} from 'primeng/button';
import { RouterLink } from '@angular/router';
import { TextIconButtonComponent } from './text-button/text-icon-button.component';
import { CategoryButtonComponent } from './category-button/category-button.component';


@NgModule({
  declarations: [
    BackButtonComponent,
    RoutingButtonComponent,
    DeleteButtonComponent,
    TextIconButtonComponent,
    CategoryButtonComponent
  ],
  imports: [
    CommonModule, bm, RouterLink
  ],
  exports : [
    BackButtonComponent,
    RoutingButtonComponent,
    DeleteButtonComponent,
    TextIconButtonComponent,
    CategoryButtonComponent
  ]
})
export class ButtonModule { }
