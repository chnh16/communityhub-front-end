import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { CourseGetAllRes } from "projects/common/src/app/pojo/course/CourseGetAllRes";
import { CourseService } from "projects/common/src/app/service/course.service";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html'
})

export class CourseDetailComponent {
    private getCourseDetail$?: Subscription
    getByCourseId?: CourseGetAllRes
    courseDelete$?: Subscription


    userId = this.userService.getidUser()

    constructor(
        private courseService: CourseService,
        private router: ActivatedRoute,
        private userService: UserService,
        private title : Title

    ) {

    }

    ngOnInit(): void {
        this.router.params.subscribe(result1 => {

            this.getCourseDetail$ = this.courseService.getByCourseId(result1['id']).subscribe(result => {
                this.getByCourseId = result
                this.title.setTitle(result.courseName)
            })
        })
    }

    deleteCourse(course: CourseGetAllRes) {
        console.log("Delete")
        this.courseDelete$ = this.courseService.delete(course.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }
}