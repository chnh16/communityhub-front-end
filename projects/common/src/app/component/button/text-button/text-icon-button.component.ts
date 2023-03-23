import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-icon-button',
  template: '<button pButton pRipple type="button" click="click" [label]="label" [icon]="icon" [class]="clasz"></button>'
})
export class TextIconButtonComponent {
  @Input() click = ''
  @Input() icon = ''
  @Input() label = ''
  @Input() clasz = ''
}
