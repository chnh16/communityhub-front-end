import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-icon-button',
    template : '<button pButton pRipple type="button" (click)="click" [label]="label" [class]="clasz" [icon]="icon"></button>'
})

export class IconButtonComponent{
    @Input() icon = ''
    @Input() label = ''
    @Input() clasz = ''
    @Input() click : any
}