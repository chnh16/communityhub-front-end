import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseGetAllRes } from "projects/common/src/app/pojo/course/CourseGetAllRes";
import { EventGetAllRes } from "projects/common/src/app/pojo/event/EventGetAllRes";
import { FileInsertReq } from "projects/common/src/app/pojo/file/FileInsertReq";
import { TransactionInsertReq } from "projects/common/src/app/pojo/transaction/TransactionInsertReq";
import { CourseService } from "projects/common/src/app/service/course.service";
import { EventService } from "projects/common/src/app/service/event.service";
import { TransactionService } from "projects/common/src/app/service/transaction.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-buy-course',
    templateUrl: './buy-course.component.html'
})

export class BuyCourseComponent implements OnInit, OnDestroy {

    constructor(
        private fb: FormBuilder,
        private courseService: CourseService,
        private transactionService: TransactionService,
        private router: Router,
        private ar: ActivatedRoute,
        private title : Title
    ) { }

    insertTransaction$?: Subscription
    getByCourseId?: CourseGetAllRes
    private getCourseDetail$?: Subscription

    eventId!: string
    courseId!: string
    membershipId!: string

    ngOnDestroy(): void {

    }
    ngOnInit(): void {
        this.ar.params.subscribe(result1 => {

            this.getCourseDetail$ = this.courseService.getByCourseId(result1['id']).subscribe(result => {
                this.getByCourseId = result
                this.title.setTitle(result.courseName)
            })

            this.courseId = result1['id']

        })
    }

    data = this.fb.group({

        voucherCode: ['', Validators.required],
        file: this.fb.group({
            fileExtension: ['', Validators.required],
            fileName: ['', Validators.required],
            fileContent: ['', Validators.required],
        })
    })


    buyCourse() {
        const file: FileInsertReq = {
            fileContent: this.data.value.file?.fileContent!,
            fileName: this.data.value.file?.fileName!,
            fileExtension: this.data.value.file?.fileExtension!,

        }
        const insert: TransactionInsertReq = {
            eventId: this.eventId,
            courseId: this.courseId,
            membershipId: this.membershipId,
            voucherCode: this.data.value.voucherCode!,
            file: file!

        }
        this.insertTransaction$ = this.transactionService.insert(insert).subscribe(res => {
            this.router.navigateByUrl('/course')
        }
        )
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