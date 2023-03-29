import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn : 'root'
})
export class RouterService{
    private history : string[] = []

    constructor(
       private router : Router,
       private location : Location
    ){}
    
    navigate(route : string){
        this.router.navigateByUrl(`/${route}`)
        this.saveHistory()
    }

    saveHistory() : void{
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd){
                this.history.push(event.urlAfterRedirects)
            }
        })
    }

    getHistory() : string[] {
        return this.history
    }

    back() : void{
        this.history.pop()

        if(this.history.length > 0){
            this.location.back()
        } else {
            this.router.navigateByUrl("/")
        }
    }

    getPreviousUrl() : string{
        if(this.history.length > 0){
            return this.history[this.history.length - 2]
        }

        return ''
    }
}