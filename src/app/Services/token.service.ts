import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { User } from '../Shared/Models/user';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  TokenAfterLogin$:BehaviorSubject<boolean> = new BehaviorSubject(true)
  constructor(private localStorageService:LocalStorageService) { }
   // Function to get the token from local storage
   getToken(): string | null {
    return this.localStorageService.getToken();
  }

  // Function to decode the token and get the payload
  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (Error) {
        console.error("Error decoding token:", Error);
        return null;
      }
    }
    return null;
  }

  // Example: Function to get user id from the token
  getUser(): User | null {
    const decoded = this.getDecodedToken();
    return decoded ? decoded : null; // 'sub' is commonly used as the user identifier in JWTs
  }

  // Example: Function to check if the token is expired
  isTokenExpired(): boolean {
    const decoded = this.getDecodedToken();
    if (decoded) {
      return decoded.exp < Date.now() / 1000;
    }
    return true;
  }
}
