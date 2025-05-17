import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
     {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: AppComponent
  },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'register',
        component:SignupComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }
];
