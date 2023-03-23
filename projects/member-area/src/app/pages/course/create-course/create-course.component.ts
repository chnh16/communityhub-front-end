import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Route, Router } from "@angular/router";
import { FileUpload } from "primeng/fileupload";
import { CategoryGetAllRes } from "projects/common/src/app/pojo/category/CategoryGetAllRes";
import { CourseInsertReq } from "projects/common/src/app/pojo/course/CourseInsertReq";
import { EventInsertReq } from "projects/common/src/app/pojo/event/EventInsertReq";
import { FileInsertReq } from "projects/common/src/app/pojo/file/FileInsertReq";
import { CategoryService } from "projects/common/src/app/service/category.service";
import { CourseService } from "projects/common/src/app/service/course.service";
import { EventService } from "projects/common/src/app/service/event.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-create-course',
    templateUrl: './create-course.component.html'
})

export class CreateCourseComponent implements OnInit, OnDestroy {


    private getCategory$?: Subscription

    categorys: CategoryGetAllRes[] = []
    createCourse$?: Subscription


    data = this.fb.group({
        courseName: ['', Validators.required],
        provider: ['', Validators.required],
        trainer: ['', Validators.required],
        locationName: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        price: [0, Validators.required],
        categoryId: ['', Validators.required],
        file: this.fb.group({
            fileExtension: ['', Validators.required],
            fileName: ['', Validators.required],
            fileContent: ['', Validators.required],
        })


    })

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private courseService: CourseService,
        private router: Router
    ) { }



    ngOnInit(): void {


        this.getCategory$ = this.categoryService.getAll().subscribe(result => {
            this.categorys = result
        })

    }

    createCourse() {
        const file: FileInsertReq = {
            fileContent: this.data.value.file?.fileContent!,
            fileName: this.data.value.file?.fileName!,
            fileExtension: this.data.value.file?.fileExtension!,

        }
        const insert: CourseInsertReq = {
            courseName: this.data.value.courseName!,
            provider: this.data.value.provider!,
            trainer: this.data.value.trainer!,
            locationName: this.data.value.locationName!,
            startDate: this.data.value.startDate!,
            endDate: this.data.value.endDate!,
            price: this.data.value.price!,
            categoryId: this.data.value.categoryId!,
            file: file!

        }
        this.createCourse$ = this.courseService.insert(insert).subscribe(res => {
            this.router.navigateByUrl('/course')
        }
        )
    }

    ngOnDestroy(): void {
        this.getCategory$?.unsubscribe()

    }



    fileUpload(event: any) {
        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === "string") resolve(reader.result)
            };
            reader.onerror = error => reject(error);
        });

        for (let file of event.files) {
            toBase64(file).then(result => {
                const resultBase64 = result.substring(result.indexOf(",") + 1, result.length)
                const resultExtension = file.name.substring(file.name.indexOf(".") + 1, file.name.length)

                this.data.patchValue({
                    file: {
                        fileName: file.name,
                        fileContent: resultBase64,
                        fileExtension: resultExtension
                    }
                })

            })
        }
    }

}