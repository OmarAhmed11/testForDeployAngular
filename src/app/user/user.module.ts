import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './Components/User-Profile/user-profile/user-profile.component';
import { UserProductListComponent } from './Components/Product/user-product-list/user-product-list.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';


@NgModule({
  declarations: [
    UserProductListComponent,
    UserProfileComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
