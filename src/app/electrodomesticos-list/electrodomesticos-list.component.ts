import { Component, OnInit } from '@angular/core';
import { ElectCartService } from '../elect-cart.service';
import { Elect } from './elec';

@Component({
  selector: 'app-electrodomesticos-list',
  templateUrl: './electrodomesticos-list.component.html',
  styleUrls: ['./electrodomesticos-list.component.css']
})
export class ElectrodomesticosListComponent implements OnInit {
  elecs: Elect[] = [
    {
    product: "Pava electrica",
    brand: "Samsung",
    price: 5000,
    stock: 5,
    image: "assets/img/pavasamsung.jpg",
    clearance:false,
    quantity: 0,

  },
  {
    product: "Impresora ",
    brand: "Pantum",
    price: 3500,
    stock: 5,
    image: "",
    clearance:false,
    quantity: 0,

  },
  {
    product: "Teclado",
    brand: "Genius",
    price: 1500,
    stock: 7,
    image: "",
    clearance:true,
    quantity: 0,
  },
  {
    product: "Teclado gamer",
    brand: "Genius",
    price: 1500,
    stock: 0,
    image: "",
    clearance:false,
    quantity: 0,
  }
  ];

  

  constructor(private cart: ElectCartService) { 
  
  }
  ngOnInit():void{

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
