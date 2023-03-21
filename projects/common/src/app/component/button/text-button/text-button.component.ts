import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-button',
  template: '<button pButton pRipple type="button" [label]="label" click="click" class="p-button-rounded p-button-secondary p-button-outlined"></button>'
})
export class TextButtonComponent {
  @Input() click = ''
  @Input() label = ''
}
