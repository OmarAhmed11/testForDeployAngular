import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { AdsComponent } from './Shared/Components/ads/ads.component';
import { WelcomePageComponent } from './Shared/Components/welcome-page/welcome-page.component';
import { ProductDetailsComponent } from './admin/Components/Product-Management/product-details/product-details.component';
import { ProductsListComponent } from './admin/Components/Product-Management/products-list/products-list.component';
import { ProductFormComponent } from './admin/Components/Product-Management/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddHeaderInterceptor } from './Shared/Interceptor/add-header.interceptor';
import { NavBarComponent } from './Shared/Components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    FooterComponent,
    AdsComponent,
    WelcomePageComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ), 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
