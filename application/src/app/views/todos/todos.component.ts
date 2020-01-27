import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';
import { Router} from '@angular/router';

import * as $ from 'jquery/dist/jquery.min.js';
$(document).ready(function () {
    $('button').click(function () {
        $('#todo').append("<ul>" + $("input[name=task]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
    });
    $("body").on('click', '#todo a', function () {
        $(this).closest("ul").remove();
    });
});
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(private TodoService:TodoService , private router :Router) {}

  ngOnInit() {
  }
  addNewTodo(obj){
    this.TodoService.addTodo(obj);
    this.router.navigate(['/superadmin']);
  }
}
