import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserVerificationReq } from "projects/common/src/app/pojo/user/UserVerificationReq";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-user-verification',
    templateUrl : './user-verification.component.html'
})
export class UserVerificationComponent implements OnInit, OnDestroy {
    userVerification$? : Subscription
    data : any

    constructor(
        private userService : UserService,
        private router : Router,
        private activatedRoute : ActivatedRoute,
        private fb : FormBuilder
    ){ }

    verificationData = this.fb.group({
        email : ['', Validators.required],
        verificationCode : ['', Validators.required]
    })

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(res => {
            this.data = JSON.parse(atob(res['data']))
            this.verificationData.patchValue({
                email : this.data
            })
        })
    }
    
    verify(){
        const data : UserVerificationReq = {
            email : this.verificationData.value.email!,
            codeVerification : this.verificationData.value.verificationCode!
        }
        this.userVerification$ = this.userService.verify(data).subscribe(res => {
            this.router.navigateByUrl('/dashboard')
        })
    }

    ngOnDestroy(): void {
        this.userVerification$?.unsubscribe()
    }
}