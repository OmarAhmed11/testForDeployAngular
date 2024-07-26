import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  User!:User
  constructor(private userService: UserService){

  }
  ngOnInit(): void {
    this.getUserDetails()
  }
  
  getUserDetails(){
    this.userService.getUserData().subscribe(result => {
      this.User = result
    })
  }
}
