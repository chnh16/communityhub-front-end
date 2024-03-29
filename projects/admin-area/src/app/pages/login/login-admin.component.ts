import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { roles } from "projects/common/src/app/constant/UserRole";
import { LoginReq } from "projects/common/src/app/pojo/user/LoginReq";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-login',
    templateUrl : './login-admin.component.html',
})
export class LoginAdminComponent implements OnDestroy {
    login$? : Subscription

    login = this.fb.group({
        email : ['', Validators.required],
        passwordUser : ['', Validators.required]
    })

    constructor (
        private fb  : FormBuilder,
        private title : Title,
        private userService : UserService,
        private router : Router,
    ) {
        this.title.setTitle("Halaman Login")
    }

    onLogin() {
        if(this.login.valid) {
            const data : LoginReq = {
                email : this.login.value.email!,
                passwordUser : this.login.value.passwordUser!
            }

            this.login$ = this.userService.login(data).subscribe(result => {
                this.userService.setData(result)

                const roleCode = this.userService.roleCode
                console.log(roleCode)
                if(roleCode == roles[3][1]) {
                    return
                } else {
                    this.router.navigate(['/category'])
                }
            })
        }
    }

    ngOnDestroy(): void {
        this.login$?.unsubscribe()
    }
      
}