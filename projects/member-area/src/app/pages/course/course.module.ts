import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "projects/common/src/app/component/button/button.module";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { ListCourseComponent } from "./list-course/list-course.component";

@NgModule({
    declarations : [
        ListCourseComponent,
        CourseDetailComponent
    ],
    imports : [
        ButtonModule,
        CardModule,
        InputTextModule
    ]
})

export class CourseModule{

}