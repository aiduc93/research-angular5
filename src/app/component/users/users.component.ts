import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input('users') users: any[] = [];
  constructor() { }

  ngOnInit() {
  }
   
}
