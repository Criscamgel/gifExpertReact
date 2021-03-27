import { useState } from "react";
import PropTypes from 'prop-types';


const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        // Evitar el reload en el form
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( ( cat ) =>  [ inputValue, ...cat ] );
            setinputValue('');            
        }
    }

    return ( 
        <>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ inputValue }
                onChange= { handleInputChange }
                placeholder= "Serie a agregar"
            />
        </form>
        </>
     );
}
 
export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}