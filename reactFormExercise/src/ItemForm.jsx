import React from "react";

const ItemForm = ({onItemSubmit}) => { 

    const   INITIAL_DATA = {
        name: "",
        quntity: "",
        purpose:"",
        agreeToTerms: false
    };

    const [data, setData] = useState(INITIAL_DATA);
    const [errors, setErrors] = useState({});

    function handleInputChange (event) {

        const {name, value, type, checked} = event.target; //name,value, type, checked are all the target that causes an event change, so when one of them changes re-render
        
        setData((prevFormData) => ({ //function that renders data
            ...prevFormData, //keep the data that was already there
            [name]: type === "checkbox" ? checked : value //the target event will update its props like this
        }))

    }

    function validateForm () {

        let newFormErrors = {}; //if there is an error in the form props, set to true

        if (!data.name) { //if data.name is not found
            newFormErrors.name = true; //set the error for the name is true
        } 
        if (!data.quantity) { //if data.quantity is not found
            newFormErrors.quantity = true; //set the error for the quantity is true
        }
        if (!data.purpose) { //if data.purpose is not found
            newFormErrors.purpose = true; //set the error for the purpose is true
        }
        if (!data.agreeToTerms) { //if the data.agreeToTerms is not found
            newFormErrors.agreeToTerms = true; //set the error for the agreeToTerms to true
        }

        setErrors(newFormErrors); //setErrors function will cause a re-render if newFormErrors has a change causing a change to errors

        return Object.keys(newFormErrors).length === 0; //this one I need to look up, not sure how to read this one
    }

    function handleSubmit (event) { //funtion on what happens when submitted

        event.preventDefault(); //as always, prevent the page from reloading

        const isFormValid = validateForm(); //is the form valid

        if (isFormValid) { //if form is valid 

            const newItem = { //the newItem will be set all the current data, but with an updated id of the current date and random number
                ...data,
                id: `${Date.now()}-${Math.floor(Math.random() * 1000)}` //I think this returns the date at that moment with a random number
            };

            onItemSubmit(newItem); //on Submit the, the form will be all the previous data, with the change in newItem, which is id.
            setData(INITIAL_DATA); //will reset the setData 
            setErrors({}); //will reset the setErrors
        }
    }

    return ( //return a form
        <form
            onSubmit={handleSubmit} //when submitted run the handleSubmit function
            className={styles.form}
        >
            <h2>Add an Item to the Inventory</h2>
            
            <div
                className={`${styles.element} ${errors["name"] ? styles.error : "" }`} //Not sure about this one either;class name style is set to styles.element but if there is an error with the name input, set the styles to the styles.error, if not return the empty "".
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleInputChange} //if a change on this render the handleInputChange
                />
            </div>

            <div
                className={`${styles.element} ${errors["quantity"] ? styles.error : ""}`} //class name style is set to styles.element but if there is an error with the quantity input, set the styles to the styles.error,  if not return empty "".
            >
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={data.quantity}
                    onChange={handleInputChange}//if a change on this render the handleInputChange
                />
            </div>

            <div
                className={`${styles.element} ${errors["purpose"] ? styles.error : ""}`}
            >
                <textarea
                    name="purpose"
                    placeholder="Purpose"
                    value={data.purpose}
                    onChange={handleInputChange} //if a change on this render the handleInputChange
                />
            </div>

        </form>
    )
}