import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { student } from 'src/app/exampleform/student';

@Component({
  selector: 'app-exampleform',
  templateUrl: './exampleform.component.html',
  styleUrls: ['./exampleform.component.css']
})
export class ExampleformComponent implements OnInit {

  exampleForm : FormGroup;
  studentArray : student[] = [{id:1,name:'uppi',password:'uppi'},
  {id:2,name:'uppi2',password:'uppi2'}]
  constructor(private fb:FormBuilder) { 
    this.exampleForm = fb.group({
      'NAME':[null],
      'PHONE_NUMBER':[null]
    })
  }

  ngOnInit() {
  }
  
  submit(){
    let name = this.exampleForm.controls['NAME'].value;
    let phonenumber = this.exampleForm.controls['PHONE_NUMBER'].value;
    this.studentArray.push({id:this.studentArray.length+1,name:name,password:phonenumber})
  }
}
