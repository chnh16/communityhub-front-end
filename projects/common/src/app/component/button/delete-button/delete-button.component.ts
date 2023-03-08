import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  template: '<button pButton pRipple type="button" (click)="click" [label]="label" class="p-button-danger"></button>'
})
export class DeleteButtonComponent {
  @Input() label = ''
  @Input() click : any
}
