/**
 Implement an ItemCard component to display item details.

 */

 const ItemCard = ({name, quantity, purpose}) => { //ItemCard component has the props, name, quantity, and purpose
    
    return ( //return with the name as heading, following with the item quantity and purpose.
        <> 
            <h2 className={styles.title}>{name}</h2>

            <p className={styles.detail}>Quantity:  {quantity}</p>
            <p className={styles.detail}>Purpose: {purpose}</p>
        </>
    );
 }