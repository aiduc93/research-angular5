import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges, DoCheck } from '@angular/core';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  //constructor k thuộc lifecycle hook
  constructor() { }
  @Input() total: number;

  totalOld: number = 0;
  title: string = 'Lifecycle Hooks Component';
  // khởi tạo directiv/component sau khi hiển thị lần đầu tiên và set các thuộc tính đầu vào của directive/component
  // Chỉ gọi 1 lần duy nhất, sau khi hook ngOnChanges() được gọi lần đầu tiên
  // Dùng để khởi tạo giá trị
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('simpleChanges', simpleChanges);
    this.totalOld = simpleChanges.total.previousValue || 0;
  }
  ngDoCheck() {
    console.log('ngDoCheck được gọi khi ngOnInt và OnChange dc gọi');
   }
}
