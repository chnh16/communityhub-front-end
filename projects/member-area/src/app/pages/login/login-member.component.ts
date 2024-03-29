import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { roles } from "projects/common/src/app/constant/UserRole";
import { LoginReq } from "projects/common/src/app/pojo/user/LoginReq";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-login-member',
    templateUrl: './login-member.component.html'
})
export class LoginMemberComponent implements OnDestroy {
    loginMember$?: Subscription

    data = this.fb.group({
        email: ['', Validators.required],
        passwordUser: ['', Validators.required]
    })

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router,
        private title : Title
    ) {
        this.title.setTitle("Login")
     }

    onLogin() {
        if (this.data.valid) {
            const data: LoginReq = {
                email: this.data.value.email!,
                passwordUser: this.data.value.passwordUser!
            }

            this.loginMember$ = this.userService.login(data).subscribe(res => {
                this.userService.setData(res)
                const roleCode = this.userService.roleCode
                
                if(roleCode == roles[3][1]){
                    if(this.userService.isVerified){
                        this.router.navigateByUrl('/dashboard')
                    } else if (!this.userService.isVerified){
                        this.router.navigate(['/user-verification'], {queryParams : {data : btoa(JSON.stringify(this.data.value.email))}})
                    } else {
                        return
                    }
                } else {
                    return
                }
            })
        }
    }

    ngOnDestroy(): void {
        this.loginMember$?.unsubscribe()
    }

}