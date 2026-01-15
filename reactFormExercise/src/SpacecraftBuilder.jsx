/**
 1. Create a `SpacecraftBuilder` component to manage inventory with the following specifics:
    - Manage the state of inventory.
    - Render `ItemForm` to allow item submission. To add items to the inventory on submission, pass down a callback function that handles it.
    - Render `InventoryDisplay` to showcase inventory items and delete them. To enable deletion, pass down a callback function that handles it.
 */



const SpacecraftBuilder = () => {

    const [inventory, setInventory] = useState([]); //useState for setting the inventory

    function addItem (item) { //funtion to add the item to inventory
        setInventory((preInventory) => [...preInventory, item]) //renders a new array of inventory with all the previous inventory and along with the new item
    }

    function deleteItem (id) { //function to delete the item in the inventory
        setInventory((preInventory) => preInventory.filter((item) => item.id !== id)) //renders a new array that will be filtered through and return all the items that don't match that item id
    }

    return (
        <div>
            <h1>Spacecraft Builder</h1>

            <div className={StyleSheet.itemForm}>
                <ItemForm onItemSubmit={addItem} //ItemForm component is called here with the prop onItemSubmit being the addItem function to pass down to that component
                />
            </div>

            <div>
                <InventoryDisplay 
                    inventory={inventory}
                    onDeleteItem={deleteItem} //InventoryDisplay will be called here with onDeleteItem being the deleteItem function passed down to it
                />
            </div>
        </div>
    );
}

export default SpacecraftBuilder;