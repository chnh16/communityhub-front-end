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
  items! : any[]

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
    this.items = [
      {
          tooltipOptions : {
            tooltipLabel : 'Add Image',
            tooltipPosition : 'bottom'
          },
          icon: 'pi pi-image',
          command: () => {
              this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
      },
      {
          tooltipOptions : {
            tooltipLabel : 'Add Polling',
            tooltipPosition : 'bottom'
          },
          icon: 'pi pi-chart-bar',
          command: () => {
              this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          }
      },
      {
          icon: 'pi pi-trash',
          command: () => {
              this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          }
      },
      {
          icon: 'pi pi-upload',
          routerLink: ['/fileupload']
      },
      {
          icon: 'pi pi-external-link',
          url: 'http://angular.io'

      }
  ]
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
