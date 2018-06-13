import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UltiService } from '../../services/ulti.service';
import { TodoModel } from '../../models/todo.class';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  todoList: TodoModel[];
  subscription: Subscription;

  constructor(
    public todoService: TodoService,
    public ultiService: UltiService
  ) { }

  ngOnInit() {
    this.subscription= this.todoService.getAllTodos().subscribe(data => {
      this.todoList = data;
    }, error => {
      this.ultiService.handlError(error);
    });
  }
  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
