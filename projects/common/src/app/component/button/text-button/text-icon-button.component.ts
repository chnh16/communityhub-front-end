import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-icon-button',
  template: '<button pButton pRipple type="button" click="click" [icon]="icon" class="p-button-rounded p-button-secondary p-button-text"></button>'
})
export class TextIconButtonComponent {
  @Input() click = ''
  @Input() icon = ''
}
