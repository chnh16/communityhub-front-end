import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: '<button pButton pRipple type="button" [routerLink]="link" [label]="label" class="p-button-secondary p-button-text"></button>'
})
export class BackButtonComponent {
  @Input() label = ''
  @Input() link = ''
}
