import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/inventory-items/inventory-items.component';
import { ITEM_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllItems(username){
    return this.http.get<Item[]>(`${ITEM_API_URL}/users/${username}/items`);

  }

  deleteItem(username, id){
    return this.http.delete(`${ITEM_API_URL}/users/${username}/items/${id}`)
  }

  retrieveItem(username, id){
    return this.http.get<Item>(`${ITEM_API_URL}/users/${username}/items/${id}`);

  }
  updateItem(username, id, Item){
    return this.http.put(`${ITEM_API_URL}/users/${username}/items/${id}`, Item);

  }
  createdItem(username, Item){
    return this.http.post(`${ITEM_API_URL}/users/items/`, Item);

  }
}
