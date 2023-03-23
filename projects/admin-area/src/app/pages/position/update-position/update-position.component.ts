
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PositionService } from "projects/common/src/app/service/position.service";
import { Subscription } from "rxjs";
import { PositionGetAllRes } from "../../../../../../common/src/app/pojo/position/PositionGetAllRes";
import { PositionUpdateReq } from "../../../../../../common/src/app/pojo/position/PositionUpdateReq";



@Component({
    selector: 'app-update-position',
    templateUrl: './update-position.component.html'
})
export class UpdatePositionComponent implements OnInit, OnDestroy {

    id!: string
    updatePosition$?: Subscription
    position$?: Subscription

    positionById!: PositionGetAllRes

    data = this.fb.group({
        id: [''],
        positionName: ['', Validators.required],
        ver: [0]
    })

    constructor(
        private activatedRouter: ActivatedRoute,
        private positionService: PositionService,
        private fb: FormBuilder,
        private router: Router
    ) { }

    onUpdate() {
        const update: PositionUpdateReq = {
            id: this.data.value.id!,
            positionName: this.data.value.positionName!,
            ver: this.data.value.ver!
        }
        this.updatePosition$ = this.positionService.update(update).subscribe(res => {
            this.router.navigateByUrl(`position`)
        })
    }

    ngOnInit(): void {
        this.activatedRouter.params.subscribe(result => {
            const params = result as any
            this.id = params.id
            this.position$ = this.positionService.getById(params.id).subscribe(result1 => {
                this.data.patchValue({
                    id: result1.id,
                    positionName: result1.positionName,
                    ver: result1.ver
                })
            })

        })
    }

    ngOnDestroy(): void {

    }
}