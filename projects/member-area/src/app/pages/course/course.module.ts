import { NgModule } from "@angular/core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "projects/common/src/app/component/button/button.module";
import { SharedModule } from "projects/common/src/app/shared.module";
import { BuyCourseComponent } from "./buy-course/buy-course.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CourseRouting } from "./course.routing";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { ListCourseComponent } from "./list-course/list-course.component";
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
    declarations: [
        ListCourseComponent,
        CourseDetailComponent,
        BuyCourseComponent,
        CreateCourseComponent
    ],
    imports: [
        ButtonModule, CardModule, InputTextModule, CourseRouting, SharedModule, CalendarModule, InputNumberModule,
        RadioButtonModule,
    ]
})

export class CourseModule {

}