import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CategoryGetAllRes } from 'projects/common/src/app/pojo/category/CategoryGetAllRes';
import { FileInsertReq } from 'projects/common/src/app/pojo/file/FileInsertReq';
import { PollingChoiceInsertReq } from 'projects/common/src/app/pojo/pollingchoice/PollingChoiceInsertReq';
import { PostGetAllRes } from 'projects/common/src/app/pojo/post/PostGetAllRes';
import { PostInsertReq } from 'projects/common/src/app/pojo/post/PostInsertReq';
import { CategoryService } from 'projects/common/src/app/service/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboard$? : Subscription
  post!: PostGetAllRes[]
  uploadedFiles: any[] = []
  showImageUpload : boolean = false
  showInsertPolling : boolean = false
  imageButton : boolean = false
  pollingButton : boolean = false
  categories : CategoryGetAllRes[] = []

  data = this.fb.group({
    postTitle : ['', Validators.required],
    postContent: ['', Validators.required],
    categoryId : ['', Validators.required],
    isPremium : false,
    file: this.fb.array([]),
    polling : this.fb.array([])
  })

  constructor(
    private fb: FormBuilder,
    private categoryService : CategoryService
  ) { }

  get imageData() {
    return this.data.get('file') as FormArray
  }

  get pollingData(){
    return this.data.get('polling') as FormArray
  }

  onShowImageUpload(){
    if(this.imageData.length > 0){
      this.pollingButton = !this.pollingButton
      this.showImageUpload = !this.showImageUpload
      this.imageData.clear()
      return
    }
    this.pollingButton = !this.pollingButton
    this.showImageUpload = !this.showImageUpload
  }

  onShowInsertPolling(){
    if(this.pollingData.length > 0){
      this.imageButton = !this.imageButton
      this.showInsertPolling = !this.showInsertPolling
      this.pollingData.clear()
      return
    }
    this.imageButton = !this.imageButton
    this.showInsertPolling = !this.showInsertPolling
    for(let i = 0; i < 2; i++){
      this.addPollingChoice()
    }
  }

  addPollingChoice(){
    this.pollingData.push(this.fb.group({
      choiceContent : ['', Validators.required]
    }))
  }

  removePollingChoice(i : number){
    this.pollingData.removeAt(i)
  }

  onSelect(event : any){
    const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") resolve(reader.result)
      };
      reader.onerror = error => reject(error);
    });

    for (let file of event.files) {
      toBase64(file).then(result => {
        const resultBase64 = result.substring(result.indexOf(",") + 1, result.length)
        const resultExtension = file.name.substring(file.name.indexOf(".") + 1, file.name.length)
        const resultFileName = file.name

        this.imageData?.push(this.fb.group({
          fileContent : [resultBase64],
          fileExtension : [resultExtension],
          fileName : [resultFileName]
        }))
      })
      this.uploadedFiles.push(file)
    }
  }

  onRemove(event : any){
    const filter = this.uploadedFiles.map((f, i) => {
      if(f.name == event.file.name){
        return i
      } else {
        return -1
      }
    }).filter(f => f != -1)

    if(filter && filter.length){
      this.imageData.removeAt(filter[0])
      this.uploadedFiles.splice(filter[0], 1)
    }
  }

  onClear(){
      this.imageData.clear()
      this.uploadedFiles = []
      this.showImageUpload = !this.showImageUpload
      this.pollingButton = !this.pollingButton
  }

  onSubmit(){
    const file : FileInsertReq[] = this.imageData.value

    const polling : PollingChoiceInsertReq[] = this.pollingData.value

    const insertPost : PostInsertReq = {
      postTitle : this.data.value.postTitle!,
      postContent : this.data.value.postContent!,
      categoryId : this.data.value.categoryId!,
      isPremium : this.data.value.isPremium!,
      file : file,
      polling : polling
    }
    console.log(insertPost)
  }

  init(){
    this.categoryService.getAll().subscribe(res => {
      this.categories = res
    })
  }

  ngOnInit(): void {
    this.init()
  }

  ngOnDestroy(): void {
    this.dashboard$?.unsubscribe()
  }

}
