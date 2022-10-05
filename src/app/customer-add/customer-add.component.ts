import { Component, EventEmitter, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Output } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customers:Customer[]=[]

  @Output() customerAdded = new EventEmitter<Customer[]>;

  constructor() { }
  

  ngOnInit(): void {
  }
  
  addCustomer(customer_name:string){
    let customer:Customer = {name:customer_name} ;
    this.customers.push(customer);
    this.customerAdded.emit(this.customers)
  }

}
