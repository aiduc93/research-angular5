import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { log } from 'util';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private loggingService: LoggingService) { 
    this.loggingService = loggingService;
  }

  ngOnInit() {
  }

  onClick() {
    this.loggingService.logging('First Component');
  }

}
