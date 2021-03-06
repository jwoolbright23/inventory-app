package org.launchcode.inventoryrest.inventory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryDataRepository extends JpaRepository<Item, Long> {

    List<Item> findByUsername(String username);
}

