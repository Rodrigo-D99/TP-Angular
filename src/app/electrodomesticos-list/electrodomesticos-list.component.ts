import { Component, OnInit } from '@angular/core';
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

  constructor() { }
  ngOnInit():void{

  }
  upQuantity(elec: Elect): void{
    if(elec.quantity< elec.stock)
    elec.quantity++;

  }
  downQuantity(elec: Elect): void{
    if(elec.quantity > 0)
    elec.quantity--;

  }
  changeQuantity(event, elec: Elect) :void{
    console.log(event.target);
  }


}
