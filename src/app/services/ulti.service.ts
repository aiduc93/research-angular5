import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UltiService {

  public token: string = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjk0ODQsInVzZXJuYW1lIjoidnVvbmdhaWR1YyIsImV4cCI6MTUzMjY3MzM4OX0.9dv3gf-IAmr0PiVO9A5Te8F9vuvMVrCKyEdoBE3dsBM';
  constructor(
    public http: HttpClient
  ) {

  }

  get<T>(url: string, param?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { params: param });

  }

  post<T>(url: string, param: HttpParams): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': this.token
      })
    };
    return this.http.post<T>(url, param, httpOptions);
  }

  handlError(err) {
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status}- ${err.error}`);
    }
  }
}
