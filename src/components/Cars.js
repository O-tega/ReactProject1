import React from 'react'

class Cars extends React.Component{
    constructor(){
        super();

    }
    

    render(){
        let {cars} = this.props;
        return(
            <div>
                {cars.map((car)=>{
                    return(
                        <div>
                            <p>name: {car.name}</p>
                            <p>type: {car.type}</p>
                        </div>
                    )
                })}
            </div>

        );

    }
}
export default Cars