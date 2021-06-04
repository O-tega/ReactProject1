import React from 'react'
import Card from './Card';

const Cars = (props) =>{
    const{list} = props
    console.log(list);
    const newList = list.map((element, id) => {
        
        return <Card {...element} id = {id}/>;

    });  
    return(
        <div>
            <h1>My cars List 🚗</h1>
            <h4 className="d-flex">{newList}</h4>
        </div>
    )

    }
export default Cars