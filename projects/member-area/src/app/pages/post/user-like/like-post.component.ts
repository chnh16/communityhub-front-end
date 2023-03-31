import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { CategoryGetAllRes } from 'projects/common/src/app/pojo/category/CategoryGetAllRes';
import { FileInsertReq } from 'projects/common/src/app/pojo/file/FileInsertReq';
import { PollingAnswerGetCountRes } from 'projects/common/src/app/pojo/pollinganswer/PollingAnswerGetCountRes';
import { PollingChoiceInsertReq } from 'projects/common/src/app/pojo/pollingchoice/PollingChoiceInsertReq';
import { PostBookmarkReq } from 'projects/common/src/app/pojo/post/PostBookmarkReq';
import { PostGetAllRes } from 'projects/common/src/app/pojo/post/PostGetAllRes';
import { PostInsertReq } from 'projects/common/src/app/pojo/post/PostInsertReq';
import { PostLikeReq } from 'projects/common/src/app/pojo/post/PostLikeReq';
import { ProfileGetReq } from 'projects/common/src/app/pojo/user/ProfileGetReq';
import { CategoryService } from 'projects/common/src/app/service/category.service';
import { PostService } from 'projects/common/src/app/service/post.service';
import { RouterService } from 'projects/common/src/app/service/router.service';
import { UserService } from 'projects/common/src/app/service/user.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-like',
    templateUrl: './like-post.component.html'
})
export class LikePostComponent implements OnInit, OnDestroy {
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
    edit: any = null

    showMore = false;

    data = this.fb.group({
        postTitle: ['', [Validators.required, Validators.minLength(5)]],
        postContent: ['', [Validators.required, Validators.minLength(5)]],
        categoryId: ['', Validators.required],
        isPremium: [false, Validators.required],
        file: this.fb.array([]),
        polling: this.fb.array([])
    })

    detail = new FormGroup('', Validators.required)

    POST_LIMIT: number = 3
    PAGE: number = 1

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private postService: PostService,
        private userService: UserService,
        private routerService: RouterService,
        private title: Title
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
        this.dashboard$ = this.postService.getPostLike(this.POST_LIMIT, this.PAGE++).subscribe(res => {
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
        this.post[i].showComment = !this.post[i].showComment
        this.postDetail$ = this.postService.getPostDetail(this.post[i].id).subscribe(res => {
            this.post[i].postDetail = res
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
        this.dashboard$ = this.postService.getPostLike(this.POST_LIMIT, this.PAGE++).subscribe(res => {
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
