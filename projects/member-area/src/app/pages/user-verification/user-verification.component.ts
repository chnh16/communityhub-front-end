import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserVerificationReq } from "projects/common/src/app/pojo/user/UserVerificationReq";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-user-verification',
    templateUrl : './user-verification.component.html'
})
export class UserVerificationComponent {

    constructor(
        private userService : UserService
    ){ }

    verificationCode = new FormControl('', Validators.required)

    verify(){
        const data : UserVerificationReq = {
            codeVerification : this.verificationCode.value!
        }
        console.log(data)
    }
}