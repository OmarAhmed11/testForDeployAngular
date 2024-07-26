import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { TokenService } from 'src/app/Services/token.service';
import { Role } from '../../Enums/role';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  IsAdmin: boolean = false

  IsUser: boolean = false
  constructor(private router:Router, private tokenService: TokenService,private localStorageService:LocalStorageService){
    this.tokenService.TokenAfterLogin$.subscribe(result => {
      if(!result) {
        this.User = null
        
      }
      this.IsAdmin = false
      this.IsUser = false
      this.User = this.localStorageService.getUserData()
      if(this.User.role == Role.Admin) {
        this.IsAdmin = true
      } else if(this.User.role == Role.User) {
        this.IsUser = true
      }
    })
  }
  User:any
  ngOnInit(): void {

  }

  Logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('User')
    this.User = null
    this.router.navigate(['/Authentication/Login'])
    this.tokenService.TokenAfterLogin$.next(true)
  }
}
