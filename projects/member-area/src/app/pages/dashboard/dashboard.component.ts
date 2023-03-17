import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { PostGetAllRes } from 'projects/common/src/app/pojo/post/PostGetAllRes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  post!: PostGetAllRes[]
  uploadedFiles: any[] = []
  showImageUpload : boolean = false

  data = this.fb.group({
    postContent: ['', Validators.required],
    postFile: this.fb.array([])
  })

  constructor(
    private fb: FormBuilder
  ) { }

  get imageData() {
    return this.data.get('postFile') as FormArray
  }

  onShowImageUpload(){
    this.showImageUpload = !this.showImageUpload
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
      console.log(filter)
    }
  }

  onClear(){

  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
