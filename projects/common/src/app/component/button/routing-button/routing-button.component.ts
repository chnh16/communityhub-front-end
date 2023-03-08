import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-routing-button',
  template: '<button pButton pRipple type="button" [routerLink]="link" [label]="label"></button>'
})
export class RoutingButtonComponent {
  @Input() label = ''
  @Input() link = ''
}
