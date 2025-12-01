const Animal = (props) => {
    return (
        <ul>
            <li>Name: {props.name}</li>
            <li>Species: {props.species}</li>
            <li>IsCute: {props.IsCute ? "yes" : "no"}</li>
        </ul>
    )
}