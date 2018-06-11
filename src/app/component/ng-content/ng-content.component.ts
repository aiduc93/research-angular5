import { Component, OnInit, AfterContentInit, AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('value') value: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
}
