import { Injectable } from '@angular/core';
import { LoginModel } from '../Models/login-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RegisterModel } from '../Models/register-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  BaseUrl:string = environment.apiUrl;
  // BaseUrl:string = "https://localhost:7221/api/"

  constructor(private http:HttpClient) { }

  Login(LoginModel:LoginModel) : Observable<any> {

    return this.http.post<any>(this.BaseUrl + 'Authentication/Login',LoginModel)
  }
  Register(RegisterModel:RegisterModel, Role:string) : Observable<any> {

    return this.http.post<any>(this.BaseUrl + 'Authentication/Register?role=' + Role ,RegisterModel)
  }
}
