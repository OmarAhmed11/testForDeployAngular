import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Shared/Models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BaseUrl:string = environment.apiUrl;
  // BaseUrl:string = "http://onlineshopappapi.runasp.net/api/"
  // BaseUrl:string = "https://localhost:7221/api/"
  constructor(private http:HttpClient) { }

  getAllProducts(includes:string[]) : Observable<Product[]> {
    return this.http.post<Product[]>(this.BaseUrl + 'Product/GetAll',includes)
  }
  getProductById(id:number,includes:string[]) : Observable<Product> {
    return this.http.post<Product>(this.BaseUrl + `Product/GetById?id=${id}`,includes)
  }
  getProductsByCondition(id?:number,categoryId?: number,includes?:string[]) : Observable<Product[]> {
    return this.http.post<Product[]>(this.BaseUrl + `Product/GetByCondition?id=${id}&&categoryId=${categoryId}`,includes)
  }
  AddProduct(product:Product) : Observable<Product> {
    return this.http.post<Product>(this.BaseUrl + `Product/Insert`,product)
  }
}
