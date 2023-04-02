import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-login',
    templateUrl: './register-admin.component.html'
})

export class RegisterAdminComponent implements OnDestroy {
    registerAdmin$? : Subscription
    data = this.fb.group({
        email : ['', Validators.required],
        passwordUser : ['', Validators.required]
    })

    constructor(
        private fb : FormBuilder,
        private userService : UserService,
        private router : Router,
        private title : Title
    ){
        this.title.setTitle("Register Admin")
    }

    onRegister(){
        if(this.data.valid){
            this.router.navigate(['/profile-admin']), {queryParams : {data : btoa(JSON.stringify(this.data.value))}}
        }
    }

    ngOnDestroy(): void {
        this.registerAdmin$?.unsubscribe()
    }
    
}