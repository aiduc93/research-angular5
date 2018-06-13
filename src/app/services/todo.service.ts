import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoModel } from '../models/todo.class';
import {UltiService} from './ulti.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public API: string = "https://jsonplaceholder.typicode.com/todos";
  constructor(
    public service: UltiService
  ) { }
  getAllTodos(): Observable<TodoModel[]> {
    return this.service.get(this.API);
  }
 
}
