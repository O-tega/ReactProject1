import React from 'react'

const Cars = () =>{
        
    const carList = [
            {
                name: 'Rolls Royce',
                model: 'Sweptail'
            },
            {
                name: 'Mercedes Benz',
                model: 'G33',
            },
            {
                name: 'Bentley',
                model: 'Bentayga',
            },
            {
                name: 'BMW',
                model: 'inext',
            },
            {
                name: 'Lamborghini',
                model: 'Urus',
            },
            {
                name: 'Porche',
                model: '911',
            },
    ];
        


    const cars = carList.map((element) => {
        return (
            <div>
                <p>Name: {element.name}</p>
                <p>Model: {element.model}</p>
            </div>
        );
    });
    return(
        <div>
            <h1>My cars List 🚗</h1>
            <div className = "d-flex">{cars}</div>
        </div>
    )
};

export default Cars