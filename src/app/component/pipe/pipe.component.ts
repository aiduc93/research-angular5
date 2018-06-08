import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  filterID: string;
  filterName: string;
  filterStatus: string;


  content: string = 'Lorem Ipsum is simply dummy txt of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
  number: number = 123.453787218;
  result: number = 0.861636;
  currency: number = 75.8;
  today : Date = new Date();
  product: any = {
    id: 1,
    name: 'Sony xperia z5',
    price: '10000000'
  }
  optionsFilter: any = [
    {
      key: true,
      value: 'Active'
    },
    {
      key: false,
      value: 'Deactive'
    }
  ]
  products:any = [
    {
      id: 1,
      name: 'Dau xanh',
      status: true
    },
    {
      id: 2,
      name: 'Dau phong',
      status: false
    },
    {
      id: 3,
      name: 'Dau den',
      status: false
    },
    {
      id: 4,
      name: 'Dau do',
      status: false
    },
    {
      id: 5,
      name: 'Dau nanh',
      status: true
    },
    {
      id: 6,
      name: 'Dau ha lan',
      status: true
    },
  ]
}
