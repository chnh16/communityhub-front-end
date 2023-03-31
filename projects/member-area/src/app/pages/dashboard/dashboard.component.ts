import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ImageOption } from 'projects/common/src/app/component/image/post-image.component';
import { CategoryGetAllRes } from 'projects/common/src/app/pojo/category/CategoryGetAllRes';
import { FileInsertReq } from 'projects/common/src/app/pojo/file/FileInsertReq';
import { PollingAnswerGetCountRes } from 'projects/common/src/app/pojo/pollinganswer/PollingAnswerGetCountRes';
import { PollingChoiceInsertReq } from 'projects/common/src/app/pojo/pollingchoice/PollingChoiceInsertReq';
import { PostBookmarkReq } from 'projects/common/src/app/pojo/post/PostBookmarkReq';
import { PostGetAllRes } from 'projects/common/src/app/pojo/post/PostGetAllRes';
import { PostInsertReq } from 'projects/common/src/app/pojo/post/PostInsertReq';
import { PostLikeReq } from 'projects/common/src/app/pojo/post/PostLikeReq';
import { PostDetailInsertReq } from 'projects/common/src/app/pojo/postdetail/PostDetailInsertReq';
import { ProfileGetReq } from 'projects/common/src/app/pojo/user/ProfileGetReq';
import { CategoryService } from 'projects/common/src/app/service/category.service';
import { PostService } from 'projects/common/src/app/service/post.service';
import { RouterService } from 'projects/common/src/app/service/router.service';
import { UserService } from 'projects/common/src/app/service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  items!: MenuItem[]
  dashboard$?: Subscription
  dashboardCategory$?: Subscription
  dashboardProfile$?: Subscription
  postLike$?: Subscription
  postBookmark$?: Subscription
  postDetail$?: Subscription
  pollingAnswer$?: Subscription
  postEdit$?: Subscription
  post!: PostGetAllRes[]
  profile?: ProfileGetReq
  uploadedFiles: any[] = []
  showImageUpload: boolean = false
  showInsertPolling: boolean = false
  showAddDetail: boolean = false
  imageButton: boolean = false
  pollingButton: boolean = false
  categories: CategoryGetAllRes[] = []
  pollingAnswer: PollingAnswerGetCountRes[] = []
  detail : any
  edit: any = null
  imageOptions: ImageOption[] = [
    {
      len: 1,
      imageItem: [
        { class: 'w-full h-30rem' }
      ]
    },
    {
      len: 2,
      imageItem: [
        { class: 'w-6' }, { class: 'w-6' }
      ]
    },
    {
      len: 3,
      imageItem: [
        { class: 'w-full h-30rem' }, { class: 'w-6' }, { class: 'w-6' }
      ]
    },
    {
      len: 4,
      imageItem: [
        { class: 'w-full h-15rem' }, { class: 'w-4 h-15rem' }, { class: 'w-4 h-15rem' }, { class: 'w-4 h-15rem' }
      ]
    }
  ]


  showMore = false;

  data = this.fb.group({
    postTitle: ['', [Validators.required, Validators.minLength(5)]],
    postContent: ['', [Validators.required, Validators.minLength(5)]],
    categoryId: ['', Validators.required],
    isPremium: [false, Validators.required],
    file: this.fb.array([]),
    polling: this.fb.array([])
  })

  POST_LIMIT: number = 3
  PAGE: number = 1

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private postService: PostService,
    private userService: UserService,
    private routerService : RouterService,
    private title : Title,
    private router : Router
  ) {
    this.title.setTitle("Beranda")
  }

  get imageData() {
    return this.data.get('file') as FormArray
  }

  get pollingData() {
    return this.data.get('polling') as FormArray
  }

  onScroll(): void {
    this.dashboard$ = this.postService.getPost(this.POST_LIMIT, this.PAGE++).subscribe(res => {
      if (res) {
        if (this.post.length) {
          this.post = [...this.post, ...res]
        } else {
          this.post = res
        }
      }
    })
  }

  onShowAddDetail(i: number) {
    this.detail = new FormControl('', Validators.required)
    this.post[i].showComment = !this.post[i].showComment
    this.postDetail$ = this.postService.getPostDetail(this.post[i].id).subscribe(res => {
      this.post[i].postDetail = res
    })
  }

  onShowPremiumContent(i : number){
    if(!this.profile?.premiumUntil){
      this.router.navigateByUrl('/memberships')
    } else {
      this.post[i].isShown = !this.post[i].isShown
    }
  }

  onInsertPostDetail(i : number){
    const data : PostDetailInsertReq = {
      postId : this.post[i].id,
      detailContent : this.detail.value
    }
    this.postDetail$ = this.postService.insertPostDetail(data).subscribe(res => {
        this.detail.reset()
    })
  }

  onShowImageUpload() {
    if (this.imageData.length > 0) {
      this.pollingButton = !this.pollingButton
      this.showImageUpload = !this.showImageUpload
      this.imageData.clear()
      return
    }
    this.pollingButton = !this.pollingButton
    this.showImageUpload = !this.showImageUpload
  }

  onShowInsertPolling() {
    if (this.pollingData.length > 0) {
      this.imageButton = !this.imageButton
      this.showInsertPolling = !this.showInsertPolling
      this.pollingData.clear()
      return
    }
    this.imageButton = !this.imageButton
    this.showInsertPolling = !this.showInsertPolling
    for (let i = 0; i < 2; i++) {
      this.addPollingChoice()
    }
  }

  addPollingChoice() {
    this.pollingData.push(this.fb.group({
      choiceContent: ['', Validators.required]
    }))
  }

  removePollingChoice(i: number) {
    this.pollingData.removeAt(i)
  }

  onSelect(event: any) {
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
          fileContent: [resultBase64],
          fileExtension: [resultExtension],
          fileName: [resultFileName]
        }))
      })
      this.uploadedFiles.push(file)
    }
  }

  onRemove(event: any) {
    const filter = this.uploadedFiles.map((f, i) => {
      if (f.name == event.file.name) {
        return i
      } else {
        return -1
      }
    }).filter(f => f != -1)

    if (filter && filter.length) {
      this.imageData.removeAt(filter[0])
      this.uploadedFiles.splice(filter[0], 1)
    }
  }

  onClear() {
    this.imageData.clear()
    this.uploadedFiles = []
    this.showImageUpload = !this.showImageUpload
    this.pollingButton = !this.pollingButton
  }

  onSubmit() {
    const file: FileInsertReq[] = this.imageData.value

    const polling: PollingChoiceInsertReq[] = this.pollingData.value

    const insertPost: PostInsertReq = {
      postTitle: this.data.value.postTitle!,
      postContent: this.data.value.postContent!,
      categoryId: this.data.value.categoryId!,
      isPremium: this.data.value.isPremium!,
      file: file,
      polling: polling
    }
    this.postService.insertPost(insertPost).subscribe(res => {
      this.data.reset()
    })
  }

  onLike(postId: string, i: number): void {
    const data: PostLikeReq = {
      postId: postId
    }
    this.postLike$ = this.postService.onLike(data).subscribe(res => {
      this.post[i].isLiked = {
        id: res.id,
        status: true
      }
    })
  }

  onInsertPostDetail() {

  }

  onDislike(postId: string, i: number): void {
    this.postLike$ = this.postService.onDislike(postId).subscribe(res => {
      this.post[i].isLiked = null
    })
  }

  onBookmark(postId: string, i: number): void {
    const data: PostBookmarkReq = {
      postId: postId
    }
    this.postBookmark$ = this.postService.onBookmark(data).subscribe(res => {
      this.post[i].isBookmarked = {
        id: res.id,
        status: true
      }
    })
  }

  onRemoveBookmark(postId: string, i: number): void {
    this.postBookmark$ = this.postService.onRemoveBookmark(postId).subscribe(res => {
      this.post[i].isBookmarked = null
    })
  }

  init(): void {
    this.dashboard$ = this.postService.getPost(this.POST_LIMIT, this.PAGE++).subscribe(res => {
      this.post = res
    })
  }

  onInsertPollingAnswer(pollingChoiceId: string, i: number) {
    this.pollingAnswer$ = this.postService.onInsertPollingAnswer(pollingChoiceId).subscribe(res => {
      this.post[i].isAnswered = {
        id: res.id,
        choiceId: pollingChoiceId
      }
    })
  }

  onRemovePollingAnswer(pollingAnswerId: string, i: number) {
    this.pollingAnswer$ = this.postService.onRemovePollingAnswer(pollingAnswerId).subscribe(res => {
      this.post[i].isAnswered = null;
    })
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Ubah'
        //command : ((postId) => this.onEdit(postId))
      },
      {
        label: 'Hapus'
      }
    ]
    this.init()
    this.dashboardCategory$ = this.categoryService.getAll().subscribe(res => {
      this.categories = res
      this.data.patchValue({
        categoryId: this.categories.at(0)?.id
      })
    })

    setTimeout(() => {
      this.dashboardProfile$ = this.userService.getProfile().subscribe(res => {
        this.profile = res
      })
    }, 1000)
  }

  ngOnDestroy(): void {
    this.dashboard$?.unsubscribe()
  }

  navigate(route: string) {
    this.routerService.navigate(route)
  }

  onEdit(postId: string) {
    this.edit = this.fb.group({
      postTitle: ['', Validators.required],
      postContent: ['', Validators.required]
    })

    this.postEdit$ = this.postService.getPostById(postId).subscribe(res => {

    })
  }

  getPollingAnswer(i: number): PollingAnswerGetCountRes[] {
    this.pollingAnswer$ = this.postService.getPollingAnswer(this.post[i].id).subscribe(res => {
      this.pollingAnswer = res
    })

    return this.pollingAnswer
  }

}
