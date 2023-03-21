import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TransactionRole } from "projects/common/src/app/constant/TransactionRole";
import { TransactionGetAllRes } from "projects/common/src/app/pojo/transaction/TransactionGetAllRes";
import { TransactionGetByCourseIdRes } from "projects/common/src/app/pojo/transaction/TransactionGetByCourseIdRes";
import { TransactionGetByEventsIdRes } from "projects/common/src/app/pojo/transaction/TransactionGetByEventIdRes";
import { TransactionGetByMembershipIdRes } from "projects/common/src/app/pojo/transaction/TransactionGetByMembershipIdRes";
import { UpdateTransactionReq } from "projects/common/src/app/pojo/transaction/UpdateTransactionReq";
import { TransactionService } from "projects/common/src/app/service/transaction.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-login',
    templateUrl : './approval.component.html'
})
export class ApprovalComponent implements OnInit, OnDestroy{
    id! : string
    resCourseTransaction : TransactionGetByCourseIdRes[] = []
    resEventTransaction : TransactionGetByEventsIdRes[] = []
    resMembershipTransaction : TransactionGetByMembershipIdRes[] = []
    getById! : TransactionGetAllRes
    courseApproval$? : Subscription
    eventApproval$? : Subscription
    membershipApproval$? : Subscription
    updateTransaction$? : Subscription
    courseUpdate$? : Subscription

    update! : UpdateTransactionReq
    
    type! : string

    constructor(
        private transactionService : TransactionService,
        private fb : FormBuilder,
        private activatedRouter : ActivatedRoute,
        private router : Router
    ){}
    
    data = this.fb.group({
        id : [''],
        isApproved : [false],
        ver : [0]
    })

    onUpdate(id : string) {
         
        this.transactionService.getTransactionById(id).subscribe(res => {
            this.getById = res

            this.update = {
                id : this.getById.id,
                isApproved : true,
                ver : this.getById.ver
            }
            console.log(this.update)
            this.updateTransaction$ = this.transactionService.updateTransaction(this.update).subscribe(res => {
    
            })
        })
        
    }
 
    ngOnInit(): void {
        this.courseApproval$ = this.transactionService.getTransactionCourseId(TransactionRole.COURSE).subscribe(res => {
            this.resCourseTransaction = res
            console.log(this.resCourseTransaction)
        })
        this.eventApproval$ = this.transactionService.getTransactionEventId(TransactionRole.EVENT).subscribe(res => {
            this.resEventTransaction = res
        })
        this.membershipApproval$ = this.transactionService.getTransactionMembershipId(TransactionRole.MEMBERSHIP).subscribe(res => {
            this.resMembershipTransaction = res
        })     

    }

    ngOnDestroy(): void {
        this.courseApproval$?.unsubscribe()
        this.eventApproval$?.unsubscribe()
        this.membershipApproval$?.unsubscribe()
    }
    
    
}