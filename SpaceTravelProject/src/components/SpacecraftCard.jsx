export default function SpaceCraftCard({name, capacity, pictureUrl, onView, onDestroy}) {
    return ( 
        /*What values in card will vary from spacecraft to spacecraft (these will be the props)?
            -Name (from the data)
            -Capacity (from the data)
            -view action (from the parent state when rocket button click)
            -destroy action (from the parent state when destroy click)
        */
        <div className="spaceCraftCard">
            <h3>Name: {name}</h3>
            <p><strong>Capacity:</strong> {capacity}</p>

            <div className="spaceCraftActions">
                <button onClick={onView}><img src={pictureUrl} alt={`View ${name}`}/></button>
                <button onClick={onDestroy}>Destroy</button>
            </div>
        </div>
    );
}