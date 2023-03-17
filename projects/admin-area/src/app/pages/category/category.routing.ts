import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { MenuBarComponent } from "projects/common/src/app/component/navbar/navbar.component";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { UpdateCategoryComponent } from "./update-category/update-category.component";



const appRouter : Routes = [
    {
        path : '',
        component : ListCategoryComponent, 
    },
    {
        path : 'add',
        component : CreateCategoryComponent, 
    },
    {
        path : 'update/:id',
        component : UpdateCategoryComponent, 
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