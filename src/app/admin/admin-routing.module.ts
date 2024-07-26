import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/Product-Management/product-details/product-details.component';
import { ProductFormComponent } from './Components/Product-Management/product-form/product-form.component';
import { ProductsListComponent } from './Components/Product-Management/products-list/products-list.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AdminGuard } from '../Shared/Guards/admin.guard';


const routes: Routes = [
  {path:'', redirectTo: 'adminHome', pathMatch: 'full'},
  {path:'adminHome', component:AdminHomeComponent,
   canActivate:[AdminGuard]
  },
  {path:'products', component:ProductsListComponent,
   canActivate:[AdminGuard]
  },
  {path:'product/:id', component:ProductDetailsComponent,
   canActivate:[AdminGuard]
  },
  {path:'add-product', component:ProductFormComponent,
   canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
