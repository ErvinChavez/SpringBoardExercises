export default function CreateSpacecraft() {
    
    /**After creating the page, ask myself, What do i want the UI to show on this page,
     * So start with the return to see what I need to add to retrieve the info I need.
     */
    return (
        <div className="create-spacecraft">
            <h1>Build a New Spacecraft</h1>
            
            <form>
                <label>
                    Name
                    <input type="text"/>
                </label>

                <label>
                    Capacity
                    <input type="number"/>
                </label>

                <label>
                    Description
                    <textarea />
                </label>

                <label>
                    Picture URL {/*Make this optional */}
                    <input type="text"/>
                </label>
            </form>
        
        </div>
    )
}