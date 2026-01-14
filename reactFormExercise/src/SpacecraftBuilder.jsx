// import React, {useState} from "react";

// const SpacecraftBuilder = () => {
//     const INITIAL_STATE = [
//         {id: 1, name:'John', qty: 2, purpose:'to see the world'},
//         {id: 2, name:'Erica', qty: 1, purpose:'follow my dreams'}
//     ]
//     const [items, setItems] = useState()

//     return (
//         <div>
//              <h3></h3>
//         </div>
//     )
// }

// export default SpacecraftBuilder;

const SpacecraftBuilder = () => {

    const [inventory, setInventory] = useState([]); //useState for setting the inventory

    function addItem (item) { //funtion to add the item to inventory
        setInventory((preInventory) => [...preInventory, item]) //renders a new array of inventory with all the previous invetory and along with the new item
    }

    function deleteItem (id) { //function to delete the item in the inventory
        setInventory((preInventory) => preInventory.filter((item) => item.id !== id)) //renders a new array that will be filtered through and return all the items that don't match that item id
    }

    return (
        <div>
            <h1>Spacecraft Builder</h1>

            <div className={StyleSheet.itemForm}>
                <ItemForm onItemSubmit={addItem}/>
            </div>

            <div>
                <InventoryDisplay
                    inventory={inventory}
                    onDeleteItem={deleteItem}
                />
            </div>
        </div>
    );
}

export default SpacecraftBuilder;