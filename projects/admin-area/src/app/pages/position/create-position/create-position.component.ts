import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PositionInsertReq } from "projects/common/src/app/pojo/position/PositionInsertReq";
import { PositionService } from "projects/common/src/app/service/position.service";
import { Subscription } from "rxjs";



@Component({
    selector: 'app-create-position',
    templateUrl: './create-position.component.html'
})
export class CreatePositionComponent implements OnInit, OnDestroy {
    data = this.fb.group({
        positionName: ['', Validators.required]
    })
    createPosition$?: Subscription

    constructor(
        private positionService: PositionService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    submit() {
        const insert: PositionInsertReq = {
            positionName: this.data.value.positionName!
        }
        this.createPosition$ = this.positionService.insert(insert).subscribe(res => {
            this.router.navigateByUrl('/position')
        })
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.createPosition$?.unsubscribe()
    }
}