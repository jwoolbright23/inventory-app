package org.launchcode.inventoryrest.inventory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class InventoryDataController {

    @Autowired
    private InventoryService ItemService;

    @Autowired
    private InventoryDataRepository inventoryDataRepository;


    @GetMapping("/h2/users/{username}/items")
    public List<Item> getAllItems(@PathVariable String username){
        return inventoryDataRepository.findByUsername(username);
        //return ItemService.findAll();
    }

    @GetMapping("/h2/users/{username}/items/{id}")
    public Item getItem(@PathVariable String username, @PathVariable long id){
        return inventoryDataRepository.findById(id).get();
        //return ItemService.findById(id);
    }

    @DeleteMapping("/h2/users/{username}/items/{id}")
    public ResponseEntity<Void> deleteItem(
            @PathVariable String username, @PathVariable long id){

//        Item item = ItemService.deleteById(id);
        inventoryDataRepository.deleteById(id);

//        if(item!=null) {
            return ResponseEntity.noContent().build();
//        }

//        return ResponseEntity.notFound().build();
    }

    @PutMapping("/h2/users/{username}/items/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable String username,
                                           @PathVariable long id, @RequestBody Item item){

        Item itemUpdated = inventoryDataRepository.save(item);

        return new ResponseEntity<Item>(item, HttpStatus.OK);
    }

    @PostMapping("/h2/users/{username}/items")
    public ResponseEntity<Void> createdItem(@PathVariable String username, @RequestBody Item item){

        item.setUsername(username);
        Item createdItem = inventoryDataRepository.save(item);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdItem.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}