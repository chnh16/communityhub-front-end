import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FileInsertReq } from "projects/common/src/app/pojo/file/FileInsertReq";
import { IndustryGetAllRes } from "projects/common/src/app/pojo/industry/IndustryGetAllRes";
import { PositionGetAllRes } from "projects/common/src/app/pojo/position/PositionGetAllRes";
import { LoginReq } from "projects/common/src/app/pojo/user/LoginReq";
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
export class ProfileMemberComponent implements OnInit, OnDestroy {
    registerData! : any
    profileMember$? : Subscription
    industry$? : Subscription
    position$? : Subscription
    industries! : IndustryGetAllRes[]
    positions! : PositionGetAllRes[]
    file : any

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private industryService: IndustryService,
        private positionService: PositionService,
        private activatedRoute: ActivatedRoute,
        private router : Router
    ) { }

    data = this.fb.group({
        email : ['', Validators.required],
        passwordUser :['', Validators.required]
    })
    profile = this.fb.group ({
        fullName : ['', Validators.required],
        country : ['', Validators.required],
        province : ['', Validators.required],
        city : ['', Validators.required],
        phoneNumber : ['', Validators.required],
        postalCode : ['', Validators.required],
        company : ['', Validators.required],
        positionId : ['', Validators.required],
        industryId : ['', Validators.required],
    })

    onSubmit(){
        const profile : ProfileInsertReq = {
            fullName : this.profile.value.fullName!,
            country : this.profile.value.country!,
            province : this.profile.value.province!,
            city : this.profile.value.city!,
            phoneNumber : this.profile.value.phoneNumber!,
            postalCode : this.profile.value.postalCode!,
            positionId : this.profile.value.positionId!,
            industryId : this.profile.value.industryId!,
            company : this.profile.value.company!,
            file : this.file
        }

        if(this.file){
            profile.file = {
                fileContent : this.file.value.fileContent,
                fileExtension : this.file.value.fileExtension,
                fileName : this.file.value.fileName
            }
        }

        const register : RegisterReq = {
            email : this.data.value.email!,
            passwordUser : this.data.value.passwordUser!,
            profile : profile
        }

        const data : LoginReq = {
            email : this.data.value.email!,
            passwordUser : this.data.value.passwordUser!
        }
        this.userService.regisMember(register).subscribe(result => {
            this.router.navigate(['/user-verification'], {queryParams : {data : btoa(JSON.stringify(this.data.value.email))}})
        })
    }

    uploadFile(event:any) {
        this.file = this.fb.group ({
            fileName : ['', Validators.required],
            fileContent : ['', Validators.required],
            fileExtension : ['', Validators.required]
        })

        const toBase64 = (file : File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if(typeof reader.result === "string")
                resolve(reader.result)
            };
            reader.onerror = error => reject(error);
        });
        for(let file of event.files) {
            toBase64(file).then(result => {
                const resultBase64 = result.substring(result.indexOf(",") + 1, result.length)
                const resultExtension = file.name.substring(file.name.indexOf(".") + 1, file.name.length)
                this.file.patchValue({
                            fileName : file.name,
                            fileContent : resultBase64,
                            fileExtension : resultExtension
                })
            })
        }
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(res => {
            this.registerData = JSON.parse(atob(res['data']))
            this.data.patchValue({
                email : this.registerData.email,
                passwordUser : this.registerData.passwordUser
            })
        })
        this.industry$ = this.industryService.getAll().subscribe(res => {
            this.industries = res
            this.profile.patchValue({
                    industryId : this.industries.at(0)?.id
                })   
        })
        this.position$ = this.positionService.getAll().subscribe(res => {
            this.positions = res
            this.profile.patchValue({
                    positionId : this.positions.at(0)?.id
                })          
            })
    }

    ngOnDestroy(): void {
        this.profileMember$?.unsubscribe()
    }

}