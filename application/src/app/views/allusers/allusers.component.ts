import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {UsersService} from '../../users.service'
import {User} from '../../usersModel'
import { Router} from '@angular/router';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  myData : User[];
 

  constructor(private UsersService:UsersService , private router:Router) { 
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }
  
 getData():void{
  this.UsersService.getUsers().subscribe(
    data=>this.myData = data
  )
}
editUser(id){
  this.UsersService.updateUser(id , true).subscribe()
  this.router.navigateByUrl('admin',{skipLocationChange:true});
}
deleteUser(id){
  this.UsersService.deleteUserById(id).subscribe();
  this.router.navigateByUrl('admin')
}
}
