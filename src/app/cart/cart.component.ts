import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ElectCartService } from '../elect-cart.service';
import { Elect } from '../electrodomesticos-list/elec';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
cartList$: Observable< Elect[]>;
  constructor(private cart: ElectCartService) { 
    this.cartList$= cart.cartList.asObservable();
  }

}

