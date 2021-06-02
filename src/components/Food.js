import React from 'react'

const Food= (props) =>{
    const{foodlist} = props;
    console.log(foodlist)

    const newflist =foodlist.map((element, id) =>{
        return (
            <div key={id}>
                <p>name: {element.name}</p>
                <p>price: {element.price}</p>
            </div>
        )
    })


    return (
        <div>
            <h1>My food List 🍱</h1>
            <h4 className="d-flex">{newflist}</h4>
        </div>
    )
}

export default Food