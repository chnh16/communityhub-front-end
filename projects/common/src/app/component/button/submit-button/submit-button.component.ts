import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  template: '<button pButton pRipple type="button" type="submit" [label]="label" class="p-button-primary"></button>'
})
export class SubmitButtonComponent {
  @Input() label = ''
}
