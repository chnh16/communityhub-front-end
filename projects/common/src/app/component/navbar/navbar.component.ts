import { style } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { Subscription } from "rxjs";
import { UserService } from "../../service/user.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: [`
                :host ::ng-deep .p-menubar {
                 height: 50px;
                }
                .menubar-head {
                    position: sticky;
                    top: 0;
                    width : 100%;
                    z-index : 1;
                }
    `]
})
export class MenuBarComponent implements OnInit {
    profileFileId!: string
    dashboard$?: Subscription

    constructor(
        private router: Router,
        private userService: UserService
    ) {
    }

    items!: MenuItem[];
    itemsEnd!: MenuItem[]


    onLogout() {
        localStorage.clear()
        this.router.navigateByUrl('/login')
    }

    ngOnInit() {
        this.dashboard$ = this.userService.getProfile().subscribe(res => {
            this.profileFileId = res.file
        })
        this.items = [
            {
                label: 'Home', routerLink: '/dashboard'
            },
            {
                label: 'Article', routerLink: '/article'
            },
            {
                label: 'Transaction',
                items: [
                    { label: 'Membership', routerLink: '/memberships' },
                    { label: 'Course', routerLink: '/course' },
                    { label: 'Events', routerLink: '/event' }
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
            {
                label : 'Article',
                routerLink : '/article'
            },
            {
                label : 'Event',
                routerLink : '/event'
            },
            {
                label : 'Course',
                routerLink : '/course'
            }
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