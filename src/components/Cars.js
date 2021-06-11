import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Forms from './Forms'



class Cars extends React.Component {
    constructor() {
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

    render() {
        // let {cars} = this.props;
        let { carList } = this.state
        return (
            <div className="container">
                <div className="content">
                    <h1 className="header">Cars List</h1>
                </div>


                <Row className="container-fluid">
                    {carList.map((car, carid) => {
                        return (
                            <div className="col-sm-3 card" key={carid}>
                                <p> <strong>Name:</strong>  {car.name}</p>
                                <p><strong>Type:</strong> {car.type}</p>
                            </div>
                        );
                    })}
                </Row>


                <Forms addCars={this.addCars} />

            </div>

        );

    }
}
export default Cars