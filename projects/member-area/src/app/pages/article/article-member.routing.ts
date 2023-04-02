import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { ListArticleMemberComponent } from "./list-article-member/list-article-member.component";




const appRouter: Routes = [
    {
        path : '',
        component : ListArticleMemberComponent, 
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

export class ArticleMemberRouting {

}