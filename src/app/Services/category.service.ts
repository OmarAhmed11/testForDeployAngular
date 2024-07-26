import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../Shared/Models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BaseUrl:string = environment.apiUrl;
  // private BaseUrl:string = "http://onlineshopappapi.runasp.net/api/"
  // private BaseUrl:string = "https://localhost:7221/api/"
  constructor(private http:HttpClient) { }

  getAllCategory() : Observable<Category[]> {
    return this.http.get<Category[]>(this.BaseUrl + 'Category/GetAll')
  }
  InsertCategory(category: Category){
    this.http.post(this.BaseUrl + 'Category/Insert', category)
  }
}
