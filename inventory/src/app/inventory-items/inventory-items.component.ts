import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryDataService } from '../service/data/inventory-data.service';

export class Item {
  constructor(
    public id:number,
    public username:string,
    public description:string,
    // public location:string,
    public quantity:string,
    public dateAdded:Date,
  ){

  }
}

@Component({
  selector: 'app-inventory-items',
  templateUrl: './inventory-items.component.html',
  styleUrls: ['./inventory-items.component.css']
})
export class InventoryItemsComponent implements OnInit {
  message:String
  items: Item[]
  // old hardcoded table items
  // = [
  //   new Item(1, "cheese", 1, new Date()),
  //   new Item(2, "ice cream", 2, new Date()),
  //   new Item(3, "oatmeal", 3, new Date())
  // ]

  constructor(
    private itemSource:InventoryDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshItems();
  }
    refreshItems(){
      this.itemSource.retrieveAllItems("johndw").subscribe(
        response => {
          console.log(response);
          this.items = response;
      }
    ) 
  }

  deleteItem(id){
    console.log(`delete item ${id}`)
    this.itemSource.deleteItem("johndw", id).subscribe(
      response => {
        console.log(response);
        this.message = `Removal of Item ${id} Successful`;
        this.refreshItems();
      }
    )
  }

  updateItem(id){
    console.log(`update ${id}`)
    this.router.navigate(["items", id])
  }

  addItem(){
    this.router.navigate(["items", -1])
  }

}
