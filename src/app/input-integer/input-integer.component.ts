import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Elect } from '../electrodomesticos-list/elec';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent {
  constructor() { }
  @Input()
  quantity; number;

  @Input()
  max; Number;
  
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit():void{

  }
  upQuantity(): void{
    if(this.quantity< this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity)
    }
    
    else{
      this.maxReached.emit("Se alcanzó el maximo de este producto");

    }
  }
  downQuantity(): void{
    if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity)
  }
  changeQuantity(event) :void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity)
  }

}
