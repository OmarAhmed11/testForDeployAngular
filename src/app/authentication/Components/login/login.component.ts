import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { LoginModel } from '../../Models/login-model';
import { TokenService } from 'src/app/Services/token.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private AuthService:AuthService,
    private tokenService:TokenService,
    private toastr: ToastrService,
    private localStorageService:LocalStorageService
  ) {

  }
  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      UserName: ['',Validators.required],
      Password: ['',Validators.required]
    });
  }
 
  get UserName() {
    return this.form.get('UserName');
  }
  get Password() {
    return this.form.get('Password');
  }


  Login(){
 
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    var LoginUser:LoginModel = {
      UserName: this.UserName?.value,
      Password: this.Password?.value,
    }
    this.AuthService.Login(LoginUser).subscribe({
      next: result =>{
        this.localStorageService.SetToken(result.token)
        let user = this.tokenService.getDecodedToken()
        this.localStorageService.SetUserData(user)
        this.tokenService.TokenAfterLogin$.next(true)
        if(user.role === 'Admin') {
          this.router.navigate(['/Admin'])
        } else if(user.role === 'User') {
          this.router.navigate(['/User'])
        }
        this.toastr.success('Login Done');
      },
      error: err => { console.log(err)}
    })
  }
  GoToRegisterPage(){
    this.router.navigate(['/Authentication/Register'])
  }
}
