import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ArticleGetAllRes } from "projects/common/src/app/pojo/article/ArticleGetAllRes";
import { ArticleService } from "projects/common/src/app/service/article.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-article',
    templateUrl: './list-article-member.component.html',
    styles: [`
                :host ::ng-deep .article-header {
                 height: 300px;
                }
                .article-header {
                    top: 0;
                    width : 100%;
                    background-image : url("https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80");
                }
    `]
})
export class ListArticleMemberComponent implements OnInit, OnDestroy {
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