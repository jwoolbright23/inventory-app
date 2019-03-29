import { Component, OnInit } from '@angular/core';
import { InventoryDataService } from '../service/data/inventory-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../inventory-items/inventory-items.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: number
  item: Item

  constructor(
    private itemSource: InventoryDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.item = new Item(this.id,"johndw", "", "", new Date);

    this.id = this.route.snapshot.params["id"];

    if (this.id!= -1) {
      this.itemSource.retrieveItem("johndw", this.id)
        .subscribe(
          data => this.item = data
        )
    }
  }

  saveItem() {
    if (this.id === -1) {
      this.itemSource.createdItem("johndw", this.item)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(["items"])
          }
        )
    } else {
      this.itemSource.updateItem("johndw", this.id, this.item)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(["items"])
          }
        )
      }
    }
}
