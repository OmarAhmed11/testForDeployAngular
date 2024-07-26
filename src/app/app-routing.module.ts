import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './Shared/Components/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path:'welcome', component: WelcomePageComponent
  },
  {path:'', redirectTo: 'welcome', pathMatch: 'full'},
  {
    path: 'Admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'Authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'User',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
