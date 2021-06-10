import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Forms from './Forms'



class Cars extends React.Component{
    constructor(){
        super();
        this.state = {
            carList: [
                {
                    name: 'Rolls Royce',
                    type: 'Sweptail'
                },
                {
                    name: 'Mercedes Benz',
                    type: 'G33',
                },
                {
                    name: 'Bentley',
                    type: 'Bentayga',
                },
            ]


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
        // let {cars} = this.props;
        let {carList} = this.state
        return(
            <div>
                <h1>This is the cars list</h1>
                {carList.map((car, carid)=>{
                    return(
                        <div key={carid}>
                            <p>name: {car.name}</p>
                            <p>type: {car.type}</p>
                        </div>
                    );
                })}

                <Forms addCars={this.addCars} /><br />

            </div>

        );

    }
}
export default Cars