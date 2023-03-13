import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { ListCategoryComponent } from "./list-category/list-category.component";



const appRouter : Routes = [
    {
        path : 'category',
        component : ListCategoryComponent, 
    },
    {
        path : 'create-category',
        component : CreateCategoryComponent, 
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

export class CategoryRouting {

}