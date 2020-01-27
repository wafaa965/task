import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service'
import { Router} from '@angular/router';
import {Todo} from '../../todoModel'
@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.css']
})
export class AlltodosComponent implements OnInit {

  myData : Todo[];
 

  constructor(private TodoService:TodoService , private router:Router) { 
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }
  
 getData():void{
  this.TodoService.getTodos().subscribe(
    data=>this.myData = data
  )
}
editTodo(id){
  this.TodoService.updateTodo(id , true).subscribe()
  this.router.navigateByUrl('admin',{skipLocationChange:true});
}
deleteTodo(id){
  this.TodoService.deleteTodoById(id).subscribe();
  this.router.navigateByUrl('del')
}
}
