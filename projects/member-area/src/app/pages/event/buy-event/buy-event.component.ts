import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { EventGetAllRes } from "projects/common/src/app/pojo/event/EventGetAllRes";
import { FileInsertReq } from "projects/common/src/app/pojo/file/FileInsertReq";
import { TransactionInsertReq } from "projects/common/src/app/pojo/transaction/TransactionInsertReq";
import { EventService } from "projects/common/src/app/service/event.service";
import { TransactionService } from "projects/common/src/app/service/transaction.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-buy-event',
    templateUrl: './buy-event.component.html'
})

export class BuyEventComponent implements OnInit, OnDestroy {

    constructor(
        private fb: FormBuilder,
        private eventService: EventService,
        private transactionService: TransactionService,
        private router: Router,
        private ar: ActivatedRoute
    ) { }

    insertTransaction$?: Subscription
    getByEventId?: EventGetAllRes
    private geEventDetail$?: Subscription

    eventId!: string
    courseId!: string
    membershipId!: string

    ngOnDestroy(): void {

    }
    ngOnInit(): void {
        this.ar.params.subscribe(result1 => {

            this.geEventDetail$ = this.eventService.getByEventId(result1['id']).subscribe(result => {
                this.getByEventId = result
            })

            this.eventId = result1['id']

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


    buyEvent() {
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
            this.router.navigateByUrl('/event')
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