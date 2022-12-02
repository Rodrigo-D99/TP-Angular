import { Component, OnInit } from '@angular/core';
import { ElectCartService } from '../elect-cart.service';
import { ElectDataService } from '../elect-data.service';
import { Elect } from './elec';

@Component({
  selector: 'app-electrodomesticos-list',
  templateUrl: './electrodomesticos-list.component.html',
  styleUrls: ['./electrodomesticos-list.component.css']
})
export class ElectrodomesticosListComponent implements OnInit {
  elecs: Elect[] = [
   
  ];

  

  constructor(private cart: ElectCartService,
    private electData: ElectDataService) { 
  
  }
  ngOnInit():void{
   this.electData.getAll()
   .subscribe(elect => this.elecs = elect);
  }

  addToCart(elec): void{
    this.cart.addToCart(elec);
    elec.stock -= elec.quantity;
    elec.quantity = 0;
  }
  maxReached(m: string){
    alert(m);
  }

}
