import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  template: '<button pButton pRipple type="button" type="submit" [label]="label" [class]="clasz"></button>'
})
export class SubmitButtonComponent {
  @Input() label = ''
  @Input() clasz = ''
}
