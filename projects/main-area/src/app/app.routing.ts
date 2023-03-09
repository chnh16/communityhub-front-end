import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import { CanLoad } from "@angular/router";
import { CodeComponent } from "./pages/code-register/code-register.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";


const appRouter : Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'code-register',
        component : CodeComponent
    }
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