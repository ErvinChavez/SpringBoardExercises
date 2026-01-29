/**Notes: this page handles 1 spacecraft;
 * reads the id from url
 * fetch the spacecraft api
 * handles the same loading and eroor
 * displays details
 * allows going back
 */

export default function Spacecraft() {
    return (
        <div className="spacecraft">
            <button onClick={() => navigate(-1)}>Back</button>
        <h1>Spacecrafts: {id}</h1>
            
        </div>
    )
}