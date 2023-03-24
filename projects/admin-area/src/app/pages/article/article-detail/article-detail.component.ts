import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleGetAllRes } from "projects/common/src/app/pojo/article/ArticleGetAllRes";
import { ArticleService } from "projects/common/src/app/service/article.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-article',
    templateUrl : './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit{
   getArticleById? : ArticleGetAllRes
   articleDetail$? : Subscription
   articleDelete$? : Subscription

   constructor(
    private articleService: ArticleService,
    private activateRoute : ActivatedRoute,
    private fb : FormBuilder
   ){}
    

   deleteArticle(articleDetail : ArticleGetAllRes) {
    console.log("Delete")
    this.articleDelete$ = this.articleService.delete(articleDetail.id).subscribe(res => {
        alert('Berhasil di hapus')
        this.ngOnInit()
    })
   }

   ngOnInit(): void {
        this.activateRoute.params.subscribe(res => {

            this.articleDetail$ = this.articleService.getArticleById(res['id']).subscribe(result => {
                this.getArticleById = result
                
            })
        }) 
    
    }
}