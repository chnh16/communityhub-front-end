import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { roles } from "projects/common/src/app/constant/UserRole";
import { ArticleGetAllRes } from "projects/common/src/app/pojo/article/ArticleGetAllRes";
import { ArticleService } from "projects/common/src/app/service/article.service";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";


@Component ({
    selector : 'app-article',
    templateUrl : './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit{
   getArticleById? : ArticleGetAllRes
   articleDetail$? : Subscription
   articleDelete$? : Subscription
   roleCode! : string

   constructor(
    private articleService: ArticleService,
    private activateRoute : ActivatedRoute,
    private fb : FormBuilder,
    private userService : UserService
   ){
    this.roleCode = userService.roleCode
   }
    isNotAdmin(){
        if(this.roleCode != roles[1][1]){
            return true
        } else {
            return false
        }
    }

   deleteArticle(articleDetail : ArticleGetAllRes) {
    this.articleDelete$ = this.articleService.delete(articleDetail.id).subscribe(res => {
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