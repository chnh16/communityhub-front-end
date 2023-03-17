import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PostGetAllRes } from 'projects/common/src/app/pojo/post/PostGetAllRes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy{
  post! : PostGetAllRes[]

  data = this.fb.group({
    postContent : ['', Validators.required]
  })

  constructor(
    private fb : FormBuilder,
    private messageService : MessageService
  ){}

  get imageData(){
    return
  }

  addImage(){
    
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
