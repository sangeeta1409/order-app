import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{

    return this.getAll().find(food =>food.id == id)!;

  }

  getAllFoodByTag(tag:string ):Foods[]{
   
    return tag =="All"?this.getAll():this.getAll().filter(food =>food.tags?.includes(tag));
    // return this.getAll()
    // else
    //  return 
  
  }

  
  
  getAll():Foods[]{
 return[
 {
  id:1,
  name:'Spinch Pasta',
  cookTime:'15-20',
  price:150,
  favorite:true,
  origins:['German'],
  star:4.5,
  imageUrl:'assets/images/pas-1.jpeg',
  tags:['healthyfood'],
 },
 {
  id:2,
  name:'Chesse Pizza',
  cookTime:'15-20',
  price:200,
  favorite:false,
  origins:['Italy'],
  star:4.5,
  imageUrl:'assets/images/p-5.jpg',
  tags:['Fastfood','pizza'],
 },
 {
  id:3,
  name:'Veg Burger',
  cookTime:'10-20',
  price:150,
  favorite:false,
  origins:['German'],
  star:4.5,
  imageUrl:'assets/images/food-3.jpeg',
  tags:['Fastfood','pizza'],
 },
 {
  id:4,
  name:'Spaghetti',
  cookTime:'10-20',
  price:250,
  favorite:false,
  origins:['Italy'],
  star:3.5,
  imageUrl:'assets/images/pas-2.jpeg',
  tags:['Fastfood'],
 },
 {
  id:5,
  name:'Creamy Soup',
  cookTime:'10-15',
  price:100,
  favorite:false,
  origins:['India','China'],
  star:4.5,
  imageUrl:'assets/images/s-1.jpg',
  tags:['healthyfood'],
 },
 {
  id:6,
  name:'Creamy Soup',
  cookTime:'10-15',
  price:100,
  favorite:true,
  origins:['India','China'],
  star:4.5,
  imageUrl:'assets/images/s-1.jpg',
  tags:['healthyfood'],
 },{
  id:7,
  name:'Creamy Soup',
  cookTime:'10-15',
  price:100,
  favorite:false,
  origins:['India','China'],
  star:4.5,
  imageUrl:'assets/images/s-1.jpg',
  tags:['healthyfood'],
 },
 {
  id:8,
  name:'Doughy Pizza',
  cookTime:'10-15',
  price:180,
  favorite:true,
  origins:['Italy','China'],
  star:4.5,
  imageUrl:'assets/images/p-2.jpg',
  tags:['Fastfood','pizza'],
 },
 {
  id:9,
  name:'Fresh Veg Salad',
  cookTime:'10-15',
  price:100,
  favorite:true,
  origins:['Greek','Roman'],
  star:4.5,
  imageUrl:'assets/images/salad-1.jpg',
  tags:['healthyfood'],
 }
 ]
  }
}
