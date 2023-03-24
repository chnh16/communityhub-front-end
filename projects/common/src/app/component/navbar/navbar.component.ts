import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class MenuBarComponent {

    // visibleSidebar1;
    constructor(private router: Router) {

    }

    items!: MenuItem[];
    itemsEnd!: MenuItem[]


    onLogout() {
        localStorage.clear()
        this.router.navigateByUrl('/login')
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Home'
            },
            {
                label: 'Article', routerLink:'/article'
            },
            {
                label: 'Transaction',
                items: [
                    { label: 'Membership' },
                    { label: 'Course' },
                    { label: 'Events' }
                ]
            },
            {
                label: 'Approval', routerLink: '/approval'
            },
            {
                label: 'Master Data',
                items: [
                    { label: 'Category', routerLink: '/category' },
                    { label: 'Industry', routerLink: '/industry' },
                    { label: 'Membership', routerLink: '/membership' },
                    { label: 'Position', routerLink: '/position' },
                    { label: 'Voucher', routerLink: '/voucher' }
                ]
            },
        ];

        this.itemsEnd = [
            {

                label: 'Profile',
                icon: 'pi pi-fw pi-user',
                //routerLink: '/user/profile'
            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-sign-out',
                command: () => this.onLogout()
            }


        ];
    }

    // showSideBar(){
    //     this.visibleSidebar1 = true;
    // }
}