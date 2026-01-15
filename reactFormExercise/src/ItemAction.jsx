/**
 Implement an ItemAction component to provide a button for deleting the item by invoking a callback function passed from InventoryDisplay, which is also passed from SpacecraftBuilder.
 
 */

const ItemAction = ({itemId, onDeleteItem}) => { //the ItemAction will will have the props of the itemId and the onDeleteItem function
    return ( //return a button
        <>
            <button
                className={styles.button} //button className is styles.button
                onClick={() => onDeleteItem(itemId)} //onClick the onDeleteItem function will run for that itemId
            >
                Delete
            </button>
        </>
    );
}

export default ItemAction;