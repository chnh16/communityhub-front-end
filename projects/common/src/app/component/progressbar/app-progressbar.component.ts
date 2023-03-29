import { Component, Input } from "@angular/core";

import { ProgressBarModule } from 'primeng/progressbar';

@Component({
    selector : 'app-progressbar',
    template : `
        <div class="container">
            <div>
                <span class="opt-left">{{label}}</span>
                <span class="opt-right">{{value}}%</span>
                <p-progressBar [value]="value"></p-progressBar>
            </div>
        </div>
    `,
    styles : [
        `
        .opt-left {
            position: absolute;
            z-index: 1;
            left: 1%;
            top: 50%;
            transform: translatey(-50%);
            color: black;
        }

        .opt-right {
            position: absolute;
            z-index: 1;
            right: 1%;
            top: 50%;
            transform: translatey(-50%);
        }

        :host ::ng-deep .p-progressbar {
            background-color: white;
        }

        :host ::ng-deep .p-progressbar-value {
            background-color: gainsboro;
        }

        :host ::ng-deep .p-progressbar-label{
            color: gainsboro;
        }

        .container {
            position: relative;
            margin : 5px 0;
        }
        `
    ],
    standalone : true,
    imports : [
        ProgressBarModule
    ]
})
export class ProgressBarComponent{

    @Input() label : String = ''
    @Input() value : number = 0
}