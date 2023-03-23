import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FileInsertReq } from "projects/common/src/app/pojo/file/FileInsertReq";
import { MembershipGetAllRes } from "projects/common/src/app/pojo/membership/MembershipGetAllRes";
import { TransactionInsertReq } from "projects/common/src/app/pojo/transaction/TransactionInsertReq";
import { MembershipService } from "projects/common/src/app/service/membership.service";
import { TransactionService } from "projects/common/src/app/service/transaction.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-buy-membership',
    templateUrl: './buy-membership.component.html'
})

export class BuyMembershipComponent implements OnInit, OnDestroy {
    constructor(
        private fb: FormBuilder,
        private membershipService: MembershipService,
        private transactionService: TransactionService,
        private router: Router,
        private ar: ActivatedRoute
    ) { }

    insertTransaction$?: Subscription
    getByMembershipId?: MembershipGetAllRes


    eventId!: string
    courseId!: string
    membershipId!: string

    ngOnDestroy(): void {

    }
    ngOnInit(): void {
        this.ar.params.subscribe(result1 => {
            this.membershipId = result1['id']

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


    buyMembership() {
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
            this.router.navigateByUrl('/memberships')
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