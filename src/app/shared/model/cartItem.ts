import { Foods } from "./food";

export class CartItem {
    constructor(food: Foods) {
        this.food = food;
        this.quantity = 1;
        this.price = this.calculatePrice();
    }

    food: Foods;
    quantity: number;
    price: number;

    calculatePrice(): number {
        return this.food.price * this.quantity;
    }
}
