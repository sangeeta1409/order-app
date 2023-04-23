import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (response: any) => {
        this.items = response.data.map((item: any) => {
          if (!item.image) {
            item.image = "https://coffee.alexflipnote.dev/random?"+item.id;
          }
          return item;
        });
      },
      err => {
        console.error('Error fetching items:', err);
      }
    );
  }
}
