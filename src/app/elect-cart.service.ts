import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Elect } from './electrodomesticos-list/elec';

@Injectable({
  providedIn: 'root'
})
export class ElectCartService {
  private _cartList: Elect[] = [];
  cartList: BehaviorSubject<Elect[]> = new BehaviorSubject ([]);  


  addToCart(elec: Elect) {
    let item: Elect = this._cartList.find((v1)=>v1.product == elec.product);
    if (!item){
      this._cartList.push ({ ... elec}) ;
    }
    else{
      item.quantity += elec.quantity;
    }
    this.cartList.next(this._cartList);
    console.log(this._cartList);
  }
  constructor() { }

}
