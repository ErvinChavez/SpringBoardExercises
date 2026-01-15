/**
 3. Implement an `InventoryDisplay` component to display inventory by taking it as props.
    - Render `ItemCard` for each item to display its details, such as name, quantity, and purpose.
    - Render `ItemAction` for each item to delete it.
4. Implement an `ItemCard` component to display item details.
5. Implement an `ItemAction` component to provide a button for deleting the item by invoking a callback function passed from InventoryDisplay, which is also passed from `SpacecraftBuilder`.
*/

import React from "react";

const InventoryDisplay = ({inventory, onDeleteItem}) => { //inventory is the array of items, onDeleteItem is the function deleteItem(id)
    return ( //return a div
        <div>
            <h2>Inventory</h2>

            {
                inventory.map((item) => ( //for every item in inventory
                    <div //make a div for each item with
                        key={item.id} //a key of the item id
                        className={styles.itemContainer} //a class name of the item container
                    >
                        <div> 
                            <ItemCard //ItemCard component will be run here, with the prop of name, quantity, and purpose
                                name={item.name}
                                quantity={item.quantity}
                                purpose={item.purpose}
                            />
                        </div>

                        <div>
                            <ItemAction //ItemAction will be run here, with the props of itemId and onDeleteItem
                                itemId={item.id}
                                onDeleteItem={onDeleteItem} //onDeleteItem function is passed down even further into the ItemAction component
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default InventoryDisplay;