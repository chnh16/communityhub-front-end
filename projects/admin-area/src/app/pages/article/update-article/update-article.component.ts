import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleGetAllRes } from "projects/common/src/app/pojo/article/ArticleGetAllRes";
import { ArticleInsertReq } from "projects/common/src/app/pojo/article/ArticleInsertReq";
import { ArticleUpdateReq } from "projects/common/src/app/pojo/article/ArticleUpdateReq";
import { FileInsertReq } from "projects/common/src/app/pojo/file/FileInsertReq";
import { ArticleService } from "projects/common/src/app/service/article.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-login',
    templateUrl: './update-article.component.html'
})
export class UpdateArticleComponent implements OnInit, OnDestroy {
    // text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    id! : string
    resArticleId! : ArticleGetAllRes
    article$? : Subscription
    updateArticle$? : Subscription

    data = this.fb.group({
        id : [''],
        articleTitle : [''],
        articleContent : [''],
        photoId: this.fb.group({
            fileName : [''],
            fileContent : [''],
            fileExtension : ['']
        }),
        ver : [0]
    })



    constructor(
        private articleService: ArticleService,
        private fb: FormBuilder,
        private activatedRoute : ActivatedRoute,
        private router : Router
    ) { }



    onUpdate(){
        const file : FileInsertReq = {
            fileContent : this.data.value.photoId?.fileContent!,
            fileName : this.data.value.photoId?.fileName!,
            fileExtension : this.data.value.photoId?.fileExtension!
        }
        const update : ArticleUpdateReq = {
            id : this.data.value.id!,
            articleTitle : this.data.value.articleTitle!,
            articleContent : this.data.value.articleContent!,
            photoId : file,
            ver : this.data.value.ver!
        }
        this.updateArticle$ = this.articleService.update(update).subscribe(res => {

        })
    }
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(result => {
            const params = result as any
            this.id = params.id
            this.article$ = this.articleService.getArticleById(params.id).subscribe(result1 => {
                this.data.patchValue({
                    id : result1.id,
                    articleTitle : result1.articleTitle,
                    articleContent : result1.articleContent,
                    ver : result1.ver
                })
            })
        })
    }

    

    fileUploadExam(event: any) {
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

                this.data.patchValue ({
                    photoId : ({
                        fileExtension: resultExtension,
                        fileName: file.name,
                        fileContent: resultBase64
                    })
                })
                    
            })
        }
    }

    ngOnDestroy(): void {

    }
}