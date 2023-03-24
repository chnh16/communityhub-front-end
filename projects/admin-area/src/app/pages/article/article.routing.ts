import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { ListArticleComponent } from "./list_article/list-article.component";




const appRouter : Routes = [
    {
        path : '',
        component : ListArticleComponent, 
    },
    {
        path : 'create-article',
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

export class ArticleRouting {

}