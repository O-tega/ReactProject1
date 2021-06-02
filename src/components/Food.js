import React from 'react'

const Food= () =>{

    const foodList = [
            {
                name: 'rice',
                price: '$45',
            },
            {
                name: 'Beans',
                price: '$95',
            },
            {
                name: 'spagehtti',
                price: '$145',
            },
            {
                name: 'goat meat pepper soup',
                price: '$25,000',
            },
            {
                name: 'jollof rice',
                price: '$30',
            },
            {
                name: 'melon soup',
                price: '$45',
            },
    ]

    const food = foodList.map ((element)=>{
        return(
            <div>
                <p>Name: {element.name}</p>
                <p>Price: {element.price}</p>
            </div>
        )
    });
    return (
        <div>
            <h1>My food List 🍱</h1>
            <div className="d-flex">{food}</div>
        </div>
    )
}

export default Food