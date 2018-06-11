import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor() {}
  ngOnInit() {
   
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');    
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  title = 'app';
  isMale: boolean = true;
  private age: number = 25;
  public name: string = 'duc';
  txtID: number;
  txtFullName: string;
  txtAddress: string;
  isShowing: boolean = true;
  number1: number;
  number2: number;
  total: number;
  content: string = 'ngContent';
  users: any[] = [
    {
      id: 1,
      name: 'vuong ai duc',
      address: '1 A',
      infor: "Lorem Ipsum is simply dummy txt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id: 2,
      name: 'vuong ai thuan',
      address: '1 B ',
      infor: "Lorem Ipsum is simply dummy txt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      id: 3,
      name: 'duong tuyet nhi',
      address: '1 C',
      infor: "Lorem Ipsum is simply dummy txt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
  ];
  onGetID(value) {
    this.txtID = value;
  }
  onGetFullName(value) {
    this.txtFullName = value;
  }
  onGetAddress(value) {
    this.txtAddress = value;
  }
  updateListUser(key, value) {
    this.users[key] = value;
  }
  onToggle() {
    this.isShowing = !this.isShowing;
  }
  onCalculate() {
    this.total = this.number1 + this.number2;
    console.log(this.total)
  }
  
}
