import { Component, OnInit ,ViewChild , AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import { ViewchildrenComponent} from '../viewchildren/viewchildren.component';

@Component({
  selector: 'app-viewparent',
  templateUrl: './viewparent.component.html',
  styleUrls: ['./viewparent.component.css']
})
export class ViewparentComponent implements OnInit {
  
  @ViewChild(ViewchildrenComponent) child;

  constructor() { }
   
  message:string = "siva";
  ngOnInit() {
    this.message = this.child.message;
  }
}
