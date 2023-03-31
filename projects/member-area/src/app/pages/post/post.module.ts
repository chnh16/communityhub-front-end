import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { SharedModule } from "projects/common/src/app/shared.module";
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { BookmarkPostComponent } from "./user-bookmark/bookmark-post.component";
import { LikePostComponent } from "./user-like/like-post.component";
import { PostRouting } from "./post.routing";

@NgModule({
    declarations: [
        BookmarkPostComponent, LikePostComponent
    ],
    imports: [
        SharedModule, PostRouting,
        InputNumberModule, CalendarModule, CardModule, InputTextModule, RadioButtonModule, InfiniteScrollModule
    ]
})

export class PostModule {

}