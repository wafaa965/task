import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../users.service'
import { Router} from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private UsersService:UsersService , private router :Router) {}
  ngOnInit() {
  }
  addNewUser(obj){
    this.UsersService.addUser(obj);
    this.router.navigate(['/allusers']);

  }

}

