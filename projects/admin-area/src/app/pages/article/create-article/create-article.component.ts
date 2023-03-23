import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ArticleInsertReq } from "projects/common/src/app/pojo/article/ArticleInsertReq";
import { ArticleService } from "projects/common/src/app/service/article.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-login',
    templateUrl: './create-article.component.html'
})
export class CreateArticleComponent implements OnInit, OnDestroy {
    text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';



    data = this.fb.group({
        articleTitle: ['', Validators.required],
        articleContent: ['', Validators.required],
        photoId: this.fb.array([])
    })


    createArticle$?: Subscription

    constructor(
        private articleService: ArticleService,
        private fb: FormBuilder
    ) { }



    submit() {
        const insert: ArticleInsertReq = {
            articleTitle: this.data.value.articleTitle!,
            articleContent: this.data.value.articleContent!,
            photoId: [... this.uploadsPhoto.value]
        }
        this.createArticle$ = this.articleService.insert(insert).subscribe(res => {

        })


    }
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.createArticle$?.unsubscribe()
    }

    get uploadsPhoto() {
        return this.data.get('photoId') as FormArray
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

                this.uploadsPhoto.push(this.fb.group({
                    fileExtension: resultExtension,
                    fileName: file.name,
                    fileContent: resultBase64
                }))
            })
        }
    }
}