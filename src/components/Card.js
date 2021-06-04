import React from 'react';

function Card({id, name, type}){
    return(
        <div>
            <p>Name: {name}</p>
            <p>Type: {type}</p>
        </div>
    )
}

export default Card