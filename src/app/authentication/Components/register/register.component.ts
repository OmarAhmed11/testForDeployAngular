import { Component } from '@angular/core';
import { RegisterModel } from '../../Models/register-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/Shared/Enums/role';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  Roles :any[] = []
  constructor(private fb: FormBuilder,
    private router: Router,
    private AuthService:AuthService
  ) {

  }
  ngOnInit(): void {
    this.initForm()
    this.getRoles()
  }

  initForm(){
    this.form = this.fb.group({
      UserName: ['',Validators.required],
      Password: ['',Validators.required],
      Email: ['',Validators.required],
      roleId: ['',Validators.required],
    });
  }
  getRoles(){
    this.Roles = [
      {id: Role.Admin, name: Role.Admin},
      {id: Role.User, name: Role.User},
      {id: Role.HR, name: Role.HR}
    ]
  }
  get UserName() {
    return this.form.get('UserName');
  }
  get Email() {
    return this.form.get('Email');
  }
  get Password() {
    return this.form.get('Password');
  }
  get roleId() {
    return this.form.get('roleId');
  }

  RegisterUser(){
    if(this.roleId?.value == 0){
      this.roleId.setErrors({ required: true })
    }
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let roleId = this.roleId?.value ?? ''
    var user:RegisterModel = {
      userName: this.UserName?.value,
      password: this.Password?.value,
      email: this.Email?.value
    }
    debugger
    this.AuthService.Register(user,roleId as string).subscribe({
      next: result => {this.router.navigate(['/Authentication/Login'])},
      error: err => { console.log(err)}
    })
  }
}
