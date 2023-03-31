import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookmarkPostComponent } from "./user-bookmark/bookmark-post.component";
import { LikePostComponent } from "./user-like/like-post.component";


const eventRoutes: Routes = [
    {
        path: 'my-bookmark',
        component: BookmarkPostComponent
    }, {
        path: 'my-like',
        component: LikePostComponent
    },


]

@NgModule({
    imports: [
        RouterModule.forChild(eventRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PostRouting {

}