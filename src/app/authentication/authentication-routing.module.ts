import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoggedInUserComponent } from './Components/logged-in-user/logged-in-user.component';
import { authGuard } from '../Shared/Guards/auth.guard';

const routes: Routes = [
  {
    path:'Login',
    component:LoginComponent,
    canActivate: [authGuard]
  },
  {
    path:'Register',
    component:RegisterComponent,
    canActivate: [authGuard]
  },
  {
    path:'LoggedIn',
    component:LoggedInUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

