import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { Subscription } from "rxjs";

@Component ({
    selector : 'app-login',
    templateUrl : './navbar.component.html'
})
export class MenuBarComponent {

    // visibleSidebar1;

    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home'
            },
            {
                label: 'Article'
            },
            {
                label: 'Transaction',
                items: [
                    {label: 'Membership'},
                    {label: 'Course'},
                    {label: 'Events'}
                ]
            },
            {
                label: 'Approval'
            },
            {
                label: 'Master Data',
                items: [
                    {label: 'Category', routerLink: '/category'},
                    {label: 'Industry', routerLink: '/industry'},
                    {label: 'Membership', routerLink: '/membership'},
                    {label: 'Position', routerLink: '/position'},
                    {label: 'Voucher', routerLink: '/voucher'}
                ]
            },
        ];
    }
    
    // showSideBar(){
    //     this.visibleSidebar1 = true;
    // }
}