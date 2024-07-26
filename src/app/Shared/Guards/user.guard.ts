import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { TokenService } from 'src/app/Services/token.service';
import { ToastrService } from 'ngx-toastr';
import { Role } from '../Enums/role';
@Injectable({
  providedIn: 'root'
})
export class userGuard implements CanActivate {

  constructor(private router: Router,private localStorageService:LocalStorageService,
    private tokenService:TokenService,private toastr: ToastrService,
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.tokenService.getUser()
    if(this.localStorageService.getToken() != null) {
      if(!this.tokenService.isTokenExpired()) {
        if(user?.role === Role.User) {
          return true
        } else {
          this.router.navigateByUrl('welcome');
          this.toastr.error('Un Auth');
          return false
        }
        
        
        
      } else {
        this.toastr.error('Your Session Ended and u need to login again');
        localStorage.clear()
        this.tokenService.TokenAfterLogin$.next(false)
        this.router.navigateByUrl('/Authentication/Login');
        return false;
      }
    }
    // alert('u neet to login first')
    this.toastr.error('u neet to login first');
    this.tokenService.TokenAfterLogin$.next(true)
    this.router.navigateByUrl('/Authentication/Login');
    return false;
  }
}
