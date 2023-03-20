import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-login',
    templateUrl : './create-article.component.html'
})
export class CreateArticleComponent {
    text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    
}