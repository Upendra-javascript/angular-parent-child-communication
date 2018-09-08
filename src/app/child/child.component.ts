import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage:string;

  @Output() messageEvent = new EventEmitter<string>();

  message:string ="hello children"


  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.messageEvent.emit(this.message);
  }
}
