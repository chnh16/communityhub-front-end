import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";



@Component ({
    selector : 'app-article',
    templateUrl : './report-member.component.html'
})
export class ReportMemberComponent implements OnInit{
   

   constructor(
    private activateRoute : ActivatedRoute,
    private fb : FormBuilder
   ){}
    


   ngOnInit(): void { 
    
    }
}