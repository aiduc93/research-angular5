import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { METHODS } from 'http';
import { TodoModel } from '../models/todo.class';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public API: string = "https://jsonplaceholder.typicode.com/todos"
  constructor(
    public http: HttpClient
  ) { }
  getAllTodos(): Observable<TodoModel[]> {
    return this.get(this.API);
  }


  get<T>(url: string, param?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { params: param });;
  }
}
