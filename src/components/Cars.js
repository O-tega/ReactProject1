import React from 'react'
import Forms from './Forms'


class Cars extends React.Component{
    constructor(){
        super();
        this.state = {
            phonesList: [
                {
                    name: 'Samsung A11',
                    quantity: 34,
                    date: 'wed May 19 2021 2:08pm',
                    price: '$50'
                },
                {
                    name: 'Itel p33 pro',
                    quantity: 100,
                    date: 'wed May 20 2021 8:00am',
                    price: '$25'
                },
                {
                    name: 'Iphone 12 S pro',
                    quantity: 13,
                    date: 'wed May 1 2021 8:00am',
                    price: '$900',
                }
            ],

    }
}
    addCars = (incomingState) => {
        let newCars = { ...incomingState }
        console.log(newCars)
        this.setState({
            carList: [...this.state.carList, newCars]
        })

    }
    
    render(){
        let {cars} = this.props;
        return(
            <div>
                <h1>This is the cars list</h1>
                {cars.map((car, carid)=>{
                    return(
                        <div key={carid}>
                            <p>name: {car.name}</p>
                            <p>type: {car.type}</p>
                        </div>
                    )
                })}

                <Forms addCars={this.addCars} /><br />

            </div>

        );

    }
}
export default Cars