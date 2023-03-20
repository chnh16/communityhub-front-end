import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CreateArticleComponent } from "./create-article/create-article.component";




const appRouter : Routes = [
    {
        path : '',
        component : CreateArticleComponent, 
    },
];

@NgModule ({
    imports : [
        RouterModule.forChild(appRouter)
    ],
    exports : [
        RouterModule
    ]
})

export class CreateArticleRouting {

}