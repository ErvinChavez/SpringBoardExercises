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
            [name]: type === "checkbox" ? checked : value //
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

        setErrors(newFormErrors); //setErrors function will cause a re-render when newFormErrors is run with it causing a change to errors
        
        return Object.keys(newFormErrors).length === 0;
    }



    return (
        <div>
            
        </div>
    )
}