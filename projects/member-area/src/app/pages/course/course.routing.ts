import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuyCourseComponent } from "./buy-course/buy-course.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { ListCourseComponent } from "./list-course/list-course.component";


const courseRoutes: Routes = [
    {
        path: '',
        component: ListCourseComponent
    },
    {
        path: 'add',
        component: CreateCourseComponent
    },
    {
        path: 'detail/:id',
        component: CourseDetailComponent
    },
    {
        path: 'buy-course/:id',
        component: BuyCourseComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(courseRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class CourseRouting {

}