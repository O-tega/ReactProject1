import React from 'react';

// function phone(){
    // this function is exactly like the one below
// }
const Phone = (props)=>{
    const{phonelist} = props;

    const newphonelist = phonelist.map((element, id)=> {
        return(
            <div key = {id}>
                <p>Name: {element.name}</p>
                <p>quantity: {element.quantity}</p>
                <p>price: {element.price}</p>
            </div>
        )
    });

   
    return (
        <div>
            <h1>My phone List 📱</h1>
            <div className="d-flex">{newphonelist}</div>
        </div>
    )
}

export default Phone