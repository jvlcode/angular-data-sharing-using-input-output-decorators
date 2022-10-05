import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() customers : Customer[]=[]
  

}
