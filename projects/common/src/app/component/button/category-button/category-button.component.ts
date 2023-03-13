import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-button',
  template: '<button pButton pRipple type="button" [routerLink]="link" class="p-button-outlined p-button-rounded">{{label}}</button>'
})
export class CategoryButtonComponent {
  @Input() link = ''
  @Input() label = ''
}
