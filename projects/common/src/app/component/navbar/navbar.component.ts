import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { Subscription } from "rxjs";
import { UserService } from "../../service/user.service";
import { roles } from "../../constant/UserRole";

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
    balance! : number
    profileFileId!: string
    roleCode! : string
    dashboard$?: Subscription

    constructor(
        private router: Router,
        private userService: UserService
    ) {
        this.roleCode = userService.roleCode
    }

    items!: MenuItem[];
    itemsEnd!: MenuItem[]

    isSuperAdmin() : boolean {
        if(this.roleCode == roles[0][1]){
            return true
        } else {
            return false
        }
    }

    isAdmin() : boolean{
        if(this.roleCode == roles[1][1]){
            return true
        } else {
            return false
        }
    }

    isMember() : boolean {
        if(this.roleCode == roles[3][1]){
            return true
        } else {
            return false
        }
    }

    onLogout() {
        const roleCode = this.userService.roleCode
        localStorage.clear()
        if(roleCode == roles[3][1]){
            this.router.navigateByUrl('/login-member')
        } else if(roleCode == 'SPR' || roleCode == 'ADM'){
            this.router.navigateByUrl('/login')
        } else {
            return
        }
    }

    ngOnInit() {

        this.dashboard$ = this.userService.getProfile().subscribe(res => {
            this.profileFileId = res.file
            this.balance = res.balance
        })

        this.items = [
            {
                label: 'Home', routerLink: '/dashboard',
                visible : this.isMember()
            },
            {
                label: 'Article', routerLink: '/article',
                visible : this.isAdmin()
            },
            {
                label: 'Transaction',
                items: [
                    { label: 'Membership', routerLink: '/memberships' },
                    { label: 'Course', routerLink: '/course' },
                    { label: 'Events', routerLink: '/event' }
                ],
                visible : this.isAdmin()
            },
            {
                label: 'Approval', routerLink: '/approval',
                visible : this.isAdmin()
            },
            {
                label: 'Master Data',
                items: [
                    { label: 'Category', routerLink: '/category' },
                    { label: 'Industry', routerLink: '/industry' },
                    { label: 'Membership', routerLink: '/membership' },
                    { label: 'Position', routerLink: '/position' },
                    { label: 'Voucher', routerLink: '/voucher' }
                ],
                visible : this.isSuperAdmin()
            },
            {
                label: 'Article',
                routerLink: '/article-member',
                visible : this.isMember()
            },
            {
                label: 'Event',
                routerLink: '/event',
                visible : this.isMember()
            },
            {
                label: 'Course',
                routerLink: '/course',
                visible : this.isMember()
            },
            {
                label : 'Report',
                routerLink : '/report-member',
                visible : this.isMember()
            },
            {
                label : 'Report',
                routerLink : '/report-admin',
                visible : this.isSuperAdmin()
            }
        ];

        this.itemsEnd = [
            {
                label : `Saldo ${this.balance}`,
                icon: 'pi pi-fw pi-wallet'
            },
            {
                separator : true
            },
            {

                label: 'Profile',
                icon: 'pi pi-fw pi-user',
                //routerLink: '/user/profile'
            },
            {

                label: 'My Bookmark',
                icon: 'pi pi-fw pi-bookmark-fill',
                routerLink: '/post/my-bookmark'
            },
            {

                label: 'My Like',
                icon: 'pi pi-fw pi-heart-fill',
                routerLink: '/post/my-like'
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