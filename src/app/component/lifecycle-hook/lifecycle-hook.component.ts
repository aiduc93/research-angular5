import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit {
  //constructor k thuộc lifecycle hook
  constructor() { }


  // khởi tạo directiv/component sau khi hiển thị lần đầu tiên và set các thuộc tính đầu vào của directive/component
  // Chỉ gọi 1 lần duy nhất, sau khi hook ngOnChanges() được gọi lần đầu tiên
  // Dùng để khởi tạo giá trị
  ngOnInit() {
    console.log('ngOnInit')
  }

}
