import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Shared/Models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl:string = environment.apiUrl;
  // private BaseUrl:string = "http://onlineshopappapi.runasp.net/api/"
  // private BaseUrl:string = "https://localhost:7221/api/"
  constructor(private http:HttpClient) { }

  getUserData() : Observable<User> {
    return this.http.get<User>(this.BaseUrl + 'Authentication/GetUserFromToken')
  }
}
