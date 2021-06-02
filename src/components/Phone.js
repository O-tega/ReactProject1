import React from 'react';

// function phone(){
    // this function is exactly like the one below
// }
const Phone = ()=>{

    const phoneList = [
        {
            name: 'Samsung A11',
            quantity: 34,
            price: '$50'
        },
        {
            name: 'Itel p33 pro',
            quantity: 100,
            price: '$25'
        },
        {
            name: 'Iphone 12 S pro',
            quantity: 13,
            price: '$900',
        },

        {
            name: 'Phone 1',
            quantity: 34,
            price: '$400',
        },
        {
            name: 'Phone 2',
            quantity: 100,
            price: '$600',
        },
        {
            name: 'Phone 3',
            quantity: 13,
            price: '$300'
        },
    ]

    const phones= phoneList.map((element) =>{
        return(
            <div>
                <p>Name: {element.name}</p>
                <p>quantity: {element.quantity}</p>
                <p>price: {element.price}</p>
            </div>
        )
    });
    return (
        <div>
            <h1>My phone List 📱</h1>
            <div className="d-flex">{phones}</div>
        </div>
    )
}

export default Phone