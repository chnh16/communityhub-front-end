import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
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
        file : this.fb.group({
            fileName : ['', Validators.required],
            fileContent : ['', Validators.required],
            fileExtension : ['', Validators.required]
        })
    })

    constructor(
        private userService : UserService,
        private positionService : PositionService,
        private industryService : IndustryService,
        private activatedRoute : ActivatedRoute,
        private fb : FormBuilder
    ){}

    onSubmit(){

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
        this.editProfile$?.unsubscribe()
    }

}