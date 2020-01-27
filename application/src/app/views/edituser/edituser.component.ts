import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../../usersModel';
import {UsersService} from '../../users.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  
  users: User = { _id: '', username: '', email:'',password:''}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private UsersService:UsersService ,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    const id = this.route.snapshot.params.id;
    this.UsersService.getUserById(id).subscribe(
      data => 
        this.users = data
        );
  }
  EditUser(updatedData) {
    const id = this.route.snapshot.params.id;
    this.UsersService.getUserById(id).subscribe(
      data => {
        this.users = data;
        this.UsersService.updateUserById(id, updatedData).subscribe();
      }
    );
    
    this.router.navigate(['allusers'])
  }


}


