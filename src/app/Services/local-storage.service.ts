import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  SetUserData(user:any){
    localStorage.setItem('User', JSON.stringify(user))
  }
  getUserData(){
    return JSON.parse(localStorage.getItem('User') || '')
  }
  SetToken(token:string){
    localStorage.setItem('token', token) 
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
