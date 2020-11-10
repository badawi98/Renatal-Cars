import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes : Routes = [
    { path: '' , redirectTo: '' , pathMatch: 'full' },
    { path: 'home' , component: HomeComponent },
    { path: 'login' , component : LoginComponent },
    { path: 'Signup' , component : SignupComponent },

  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes , {useHash: true})

    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}