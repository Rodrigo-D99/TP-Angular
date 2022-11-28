import { Component } from '@angular/core';
import { Elect } from './elec';

@Component({
  selector: 'app-electrodomesticos-list',
  templateUrl: './electrodomesticos-list.component.html',
  styleUrls: ['./electrodomesticos-list.component.css']
})
export class ElectrodomesticosListComponent {
 elecs: Elect[] = [
  {
   product: "Pava electrica",
   brand: "Samsung",
   price: 5000,
   stock: 5,
   image: "assets/img/pavasamsung.jpg",
   clearance:false,

 },
 {
  product: "Impresora ",
  brand: "Pantum",
  price: 3500,
  stock: 5,
  image: "",
  clearance:false,

},
{
  product: "Teclado",
  brand: "Genius",
  price: 1500,
  stock: 7,
  image: "",
  clearance:true,

},
{
  product: "Teclado gamer",
  brand: "Genius",
  price: 1500,
  stock: 0,
  image: "",
  clearance:false,

}
];
}
