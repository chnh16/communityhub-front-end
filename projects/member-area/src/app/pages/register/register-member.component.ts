import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Toast } from "primeng/toast";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-register-member',
    templateUrl : './register-member.component.html',
    providers : [MessageService]
})
export class RegisterMemberComponent implements OnDestroy {
    registerMember$? : Subscription
    data = this.fb.group({
        email : ['', Validators.required],
        passwordUser : ['', Validators.required],
        passwordConfirm : ['', Validators.required]
    })

    constructor(
        private fb : FormBuilder,
        private router : Router,
        private messageService : MessageService
    ){}

    signIn(){
        this.router.navigateByUrl("/login-member")
    }

    onRegister(){
        if(this.data.valid){
            if(this.data.value.passwordUser == this.data.value.passwordConfirm){
                this.router.navigate(['/register-member/profile-member'], {queryParams : {data : btoa(JSON.stringify(this.data.value))}})
            } else {
                this.showErrorPasswordConfirm()
            }
        }
    }

    showErrorPasswordConfirm(){
        this.messageService.add({severity:'error', summary: 'Gagal', detail: 'Konfirmasi password salah'});
    }

    ngOnDestroy(): void { 
        this.registerMember$?.unsubscribe()
    }
    
}