import React from 'react';

const FormElement = ({type, name, value, placeholder, onChange, className})=>{
    
        return (
                <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={className}/>
        )
}


export default FormElement;