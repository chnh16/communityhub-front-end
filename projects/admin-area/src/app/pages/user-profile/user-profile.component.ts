import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FileInsertReq } from "projects/common/src/app/pojo/file/FileInsertReq";
import { IndustryGetAllRes } from "projects/common/src/app/pojo/industry/IndustryGetAllRes";
import { PositionGetAllRes } from "projects/common/src/app/pojo/position/PositionGetAllRes";
import { ProfileInsertReq } from "projects/common/src/app/pojo/user/ProfileInsertReq";
import { RegisterReq } from "projects/common/src/app/pojo/user/RegisterReq";
import { IndustryService } from "projects/common/src/app/service/industry.service";
import { PositionService } from "projects/common/src/app/service/position.service";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-login',
    templateUrl: './user-profile.component.html'
})
export class ProfileAdminComponent implements OnInit, OnDestroy {
    registerData!: any[]
    profileMember$?: Subscription
    position$?: Subscription
    industries$?: Subscription
    positions!: PositionGetAllRes[]
    industries!: IndustryGetAllRes[]

    data = this.fb.group({
        fullName: ['', Validators.required],
        country: ['', Validators.required],
        province: ['', Validators.required],
        city: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        postalCode: ['', Validators.required],
        company: ['', Validators.required],
        positionId: ['', Validators.required],
        industryId: ['', Validators.required],
        file: this.fb.group({
            fileName: ['', Validators.required],
            fileContent: ['', Validators.required],
            fileExtension: ['', Validators.required]
        })
    })

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private industryService: IndustryService,
        private positionService: PositionService,
        private activatedRoute: ActivatedRoute
    ) { }

    onSubmit() {
        const file: FileInsertReq = {
            fileContent: this.data.value.file?.fileContent!,
            fileName: this.data.value.file?.fileName!,
            fileExtension: this.data.value.file?.fileExtension!
        }

        const profile: ProfileInsertReq = {
            fullName: this.data.value.fullName!,
            country: this.data.value.country!,
            province: this.data.value.province!,
            city: this.data.value.city!,
            phoneNumber: this.data.value.phoneNumber!,
            postalCode: this.data.value.postalCode!,
            positionId: '',
            industryId: '',
            company: this.data.value.company!,
            file: file
        }

        const register: RegisterReq = {
            email: '',
            passwordUser: '',
            profile: profile
        }
        this.userService.regisAdmin(register).subscribe(result => {

        })

    }

    uploadFile(event: any) {
        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === "string")
                    resolve(reader.result)
            };
            reader.onerror = error => reject(error);
        });
        for (let file of event.files) {
            toBase64(file).then(result => {
                const resultBase64 = result.substring(result.indexOf(",") + 1, result.length)
                const resultExtension = file.name.substring(file.name.indexOf(".") + 1, file.name.length)

                console.log(resultBase64)
                console.log(resultExtension)
                this.data.patchValue({
                    file: ({
                        fileName: file.name,
                        fileContent: resultBase64,
                        fileExtension: resultExtension
                    })
                })
            })
        }
    }

    ngOnInit(): void {
        this.position$ = this.positionService.getAll().subscribe(res => {
            this.positions = res
        })

        this.industries$ = this.industryService.getAll().subscribe(res => {
            this.industries = res
        })
    }

    ngOnDestroy(): void {
        this.profileMember$?.unsubscribe()
    }

}