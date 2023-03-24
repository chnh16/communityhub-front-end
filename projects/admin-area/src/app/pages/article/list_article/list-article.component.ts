import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ArticleGetAllRes } from "projects/common/src/app/pojo/article/ArticleGetAllRes";
import { ArticleService } from "projects/common/src/app/service/article.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-article',
    templateUrl: './list-article.component.html'
})
export class ListArticleComponent implements OnInit, OnDestroy {
    resArticle: ArticleGetAllRes[] = []
    article$?: Subscription
    articleDelete$?: Subscription


    constructor(
        private articleService: ArticleService
    ) { }

    deleteArticle(article: ArticleGetAllRes) {
        console.log("Delete")
        this.articleDelete$ = this.articleService.delete(article.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }

    ngOnInit(): void {
        this.article$ = this.articleService.getAll().subscribe(res => {
            this.resArticle = res
        })
    }

    ngOnDestroy(): void {
        this.article$?.unsubscribe()
    }


}