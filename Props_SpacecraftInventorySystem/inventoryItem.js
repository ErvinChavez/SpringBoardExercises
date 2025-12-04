function InventoryItem ({name, type , quantity = 0, price = 0})//function takes in name,type,quantity (set default to 0), and price (set default price to 0)
{
	const lowStock = 5; //set number for considered low stock
	const highValueAmount = 1000; //set number consider for high value items

	const totalValue = price * quantity; //what is the totalValue

	return (
		<div>
			<h2>{name} ({type})</h2>

			{/* <!-- TODO: Render the low stock alert based on the quantity of the item. --> */
			quantity < lowStock && // if quantity is lower then lowStock number run Message function like this...(Message will make it a children of this div)
			<Message> 
				<p><span>⚠️</span> Low Stock! {quantity} remained. </p> 
			</Message>
			}


			{/* // <!-- TODO: Render the high value alert based on the total value of the item. --> */
				totalValue > highValueAmount && //if the totalValue is bigger then highValueAmount run Message function like this...(Message will make it a children of this div)
				<Message>
					<p><span>💰</span> High Value - consider extra protection!</p>
				</Message>
			}
		</div>
	);
}
