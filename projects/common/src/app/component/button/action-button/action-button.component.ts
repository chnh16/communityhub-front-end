import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  template: '<button pButton pRipple type="button" [label]="label" (click)="click" class="p-button-primary"></button>'
})
export class ActionButtonComponent {
  @Input() label = ''
  @Input() link = ''
  @Input() click : any
}
