import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {User} from './usersModel'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://localhost:3000/';
  constructor(private http :HttpClient) { }
  getUsers(){
    return this.http.get<User[]>(this.baseUrl+'users')
  }
  addUser( user :User){
    return this.http.post(this.baseUrl+'users',user).subscribe();
  }
  deleteUserById(id : String){
    return this.http.delete(this.baseUrl+'users/'+id);
  }
  updateUser(id:string , state:boolean){
    return this.http.patch(this.baseUrl+'users/'+id,{state:true})
  }
  getSingleUser(state:boolean){
    return this.http.get<User>(this.baseUrl + 'users/' + state)
  }
  getUserById(id :string){
    return this.http.get<User>(this.baseUrl+'user/'+id)
  }
  updateUserById(id: string , user:any){
    return this.http.patch(this.baseUrl + 'user/'+id , user)
  }
  
}
