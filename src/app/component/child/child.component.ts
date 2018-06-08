import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('isMale') isMale: boolean = false;
  @Input('age') age: number = 18;
  private _name: string;
  id: number;
  fullName: string;
  address: string;

  // declare key for passing data from child to parent
  @Output('txtID') onHandleID = new EventEmitter<number>();
  @Output('txtFullName') onHandleFullName = new EventEmitter<string>();
  @Output('txtAddress') onHandleAddress = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }
  @Input()
  set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  onSubmitForm() {
    // passing data from child to parent
    this.onHandleID.emit(this.id);
    this.onHandleFullName.emit(this.fullName);
    this.onHandleAddress.emit(this.address);
  }

}
