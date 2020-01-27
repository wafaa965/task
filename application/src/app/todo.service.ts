import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Todo} from './todoModel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = 'http://localhost:3000/';
  constructor(private http :HttpClient) { }
  getTodos(){
    return this.http.get<Todo[]>(this.baseUrl+'todos')
  }
  addTodo( todo :Todo){
    return this.http.post(this.baseUrl+'todos',todo).subscribe();
  }
  deleteTodoById(id : String){
    return this.http.delete(this.baseUrl+'todos/'+id);
  }
  updateTodo(id:string , state:boolean){
    return this.http.patch(this.baseUrl+'todos/'+id,{state:true})
  }
  getSingleTodo(state:boolean){
    return this.http.get<Todo>(this.baseUrl + 'todos/' + state)
  }
  getTodoById(id :string){
    return this.http.get<Todo>(this.baseUrl+'todo/'+id)
  }
  updateTodoById(id: string , todo:any){
    return this.http.patch(this.baseUrl + 'todo/'+id , todo)
  }
  
}
