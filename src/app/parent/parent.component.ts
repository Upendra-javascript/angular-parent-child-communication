import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMessage = "Message from parent";
  message : string;

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.message = $event;
    
  }

}
