import { useNavigate } from "react-router-dom";

export default function SpaceCraftCard({id, name, capacity, pictureUrl, onDestroy}) {
    /*this will be used to view the single Spacecraft with that id. "this basically says, 'When this happens, go there'" */
    const navigate = useNavigate();
    
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
                {/* The image will go that spacecraft with the id for that's ship info. */}
                <button onClick={() => navigate(`/spacecrafts/${id}`)}><img src={pictureUrl} alt={`View ${name}`}/></button>
                <button onClick={onDestroy}>Destroy</button>
            </div>
        </div>
    );
}