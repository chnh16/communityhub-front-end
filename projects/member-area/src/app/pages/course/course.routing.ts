import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { ListCourseComponent } from "./list-course/list-course.component";

const courseRoutes : Routes = [
    {
        path : '',
        component : ListCourseComponent
    },
    {
        path : 'detail',
        component : CourseDetailComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(courseRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class CourseRouting{

}