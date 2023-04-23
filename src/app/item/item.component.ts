import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { FoodService } from '../service/food/food.service';
import { Foods } from '../shared/model/food';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  food!: Foods;
  starRating = 0;
  constructor(private route: ActivatedRoute, private service: FoodService, private cartservice: CartService, private router: Router) {
    route.params.subscribe((params) => {
      if (params['id'])
        this.food = service.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {

  }
  addToCart() {
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
