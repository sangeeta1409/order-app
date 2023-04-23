import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FoodService } from '../service/food/food.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/cartItem';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit{
  cart!:Cart;
 constructor(private cartService:CartService,){

  
this.setCart();

 }


 ngOnInit(): void {}

  setCart(){
    this.cart = this.cartService.getCart();
  } 
removeFromCart(cartItem:CartItem){

  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
}
changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id,quantity);
  this.setCart();
}

 }


