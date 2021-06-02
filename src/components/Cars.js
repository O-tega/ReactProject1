import React from 'react'

const Cars = (props) =>{
    const{list} = props
    console.log(list);
    const newList = list.map((element, id) => {
        return(
            <div key = {id}>
                <p>name: {element.name}</p>
                <p>type: {element.model}</p>
            </div>
        )
    });

        
    return(
        <div>
            <h1>My cars List 🚗</h1>
            <h4 className="d-flex">{newList}</h4>
        </div>
    )
};

export default Cars