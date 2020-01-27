import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Todo} from '../../todoModel'
import {TodoService} from '../../todo.service'

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {

  
  todos: Todo = { _id: '', text: '', done:''}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TodoService:TodoService ,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    const id = this.route.snapshot.params.id;
    this.TodoService.getTodoById(id).subscribe(
      data => 
        this.todos = data
        );
  }
  EditTodo(updatedData) {
    const id = this.route.snapshot.params.id;
    this.TodoService.getTodoById(id).subscribe(
      data => {
        this.todos = data;
        this.TodoService.updateTodoById(id, updatedData).subscribe();
      }
    );
    
    this.router.navigate(['/all'])
  }


}

