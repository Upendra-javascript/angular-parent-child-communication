import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css']
})
export class DisplayformComponent implements OnInit {
  

  @Input() studentArray;
  constructor() { }

  ngOnInit() {
  }

}
