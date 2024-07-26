import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersDetailsComponent } from './Components/Users-Management/user-details/users-details.component';
import { UsersListComponent } from './Components/Users-Management/users-list/users-list.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';


@NgModule({
  declarations: [
    UsersDetailsComponent,
    UsersListComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
