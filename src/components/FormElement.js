import React from 'react';

const FormElement = ({type, name, value, placeholder, onChange})=>{
    
        return (
         <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>  
        )
}


export default FormElement;