import React from 'react';

const FormElement = ({type, name, value, placeholder})=>{
    
        return (
         <input type={type} name={name} placeholder={placeholder} value={value}/>  
        )
}


export default FormElement;