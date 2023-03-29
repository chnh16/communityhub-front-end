import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { ListArticleComponent } from "./list_article/list-article.component";
import { UpdateArticleComponent } from "./update-article/update-article.component";




const appRouter: Routes = [
    {
        path : '',
        component : ListArticleComponent, 
    },
    {
        path: 'add',
        component: CreateArticleComponent,
    },
    {
        path: 'detail/:id',
        component: ArticleDetailComponent
    },
    {
        path: 'update/:id',
        component: UpdateArticleComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRouter)
    ],
    exports: [
        RouterModule
    ]
})

export class ArticleRouting {

}