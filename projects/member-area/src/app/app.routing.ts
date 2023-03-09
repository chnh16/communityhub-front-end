import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
// import { LoginComponent } from "./pages/login/login.component"; 
// import { OutLoadGuard } from "./guard/out-load.guard"
import { CanLoad } from "@angular/router";
// import { MenubarComponent } from "./pages/component/navbar/navbar.component";

// import { NavbarComponent } from './components/navbar/navbar.component';

const appRouter : Routes = [
    // {
    //     path : 'login',
    //     component : LoginComponent
    // },
    // {
    //     path : 'student-view',
    //     loadChildren : ()  => import('./pages/studentview/student.module').then(c => c.StudentModule),
    //     // canLoad : [OutLoadGuard]
        
    // },
    // {
    //     path : 'e-class',
    //     loadChildren : ()  => import('./pages/classElearning/class-elearning.module').then(c => c.ClassListModule), component : MenubarComponent
    //     // canLoad : [OutLoadGuard]
        
    // },
         


];

@NgModule ({
    imports : [
        RouterModule.forRoot(appRouter)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRouting {

}