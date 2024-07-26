import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { TokenService } from 'src/app/Services/token.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router,private localStorageService:LocalStorageService,
    private tokenService:TokenService,private toastr: ToastrService) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.localStorageService.getToken()) {
       return true;
    }
    this.router.navigate(['/Authentication/LoggedIn']);
    return false;
  }
}
