import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { UserProfileComponent } from './Components/User-Profile/user-profile/user-profile.component';
import { UserProductListComponent } from './Components/Product/user-product-list/user-product-list.component';
import { userGuard } from '../Shared/Guards/user.guard';

const routes: Routes = [
  {path:'', redirectTo: 'userHome', pathMatch: 'full'},
  {path:'userHome', component:UserHomeComponent,
   canActivate:[userGuard]
  },
  {path:'userProfile', component:UserProfileComponent,
   canActivate:[userGuard]
  },
  {path:'userProducts', component:UserProductListComponent,
   canActivate:[userGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
