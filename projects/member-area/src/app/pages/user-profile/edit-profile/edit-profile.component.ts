import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { IndustryGetAllRes } from "projects/common/src/app/pojo/industry/IndustryGetAllRes";
import { PositionGetAllRes } from "projects/common/src/app/pojo/position/PositionGetAllRes";
import { IndustryService } from "projects/common/src/app/service/industry.service";
import { PositionService } from "projects/common/src/app/service/position.service";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";

@Component({
    selector : 'app-edit-profile',
    templateUrl : './edit-profile.component.html'
})

export class EditProfileComponent implements OnInit, OnDestroy{
    editProfile$? : Subscription
    position$? : Subscription
    industries$? : Subscription
    positions! : PositionGetAllRes[]
    industries! : IndustryGetAllRes[]
    data = this.fb.group({
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
    file : any = null

    constructor(
        private userService : UserService,
        private positionService : PositionService,
        private industryService : IndustryService,
        private activatedRoute : ActivatedRoute,
        private fb : FormBuilder
    ){}

    onUploadImage(event : any){
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
                this.file = ({
                            fileName : file.name,
                            fileContent : resultBase64,
                            fileExtension : resultExtension
                })
            })
        }
    }

    onCancelImage(){
        if(this.file instanceof FormGroup){
            this.file.reset()
        }
        console.log(this.file)
    }

    onSubmit(){

    }

    ngOnInit(): void {
        this.editProfile$ = this.userService.getProfile().subscribe(res => {
            this.data.patchValue({
                fullName : res.fullName,
                country : res.country,
                province : res.province,
                city : res.city,
                phoneNumber : res.phoneNumber,
                postalCode : res.postalCode,
                company : res.company,
                positionId : res.positionId,
                industryId : res.industryId
            })
        })

        this.position$ = this.positionService.getAll().subscribe(res => {
            this.positions = res
        })

        this.industries$ = this.industryService.getAll().subscribe(res => {
            this.industries = res
        })
    }
    ngOnDestroy(): void {
        this.editProfile$?.unsubscribe()
    }

}