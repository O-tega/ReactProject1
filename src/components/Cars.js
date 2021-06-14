import React from 'react'
import { Row, Col, CarouselItem } from 'react-bootstrap'
import Forms from './Forms'



class Cars extends React.Component {
    constructor() {
        super();
        this.state = {


        }
    }
    // addCars = (incomingState) => {
    //     let newCars = { ...incomingState }
    //     console.log(newCars)
    //     this.setState({
    //         carList: [...this.state.carList, newCars]
    //     })

    // }

    render() {
        let {cars} = this.props;
        // let { carList } = this.state
        console.log(cars)
        // console.log(carList)
        // console.log(this.props)
        // const { cars }=this.props;
        // console.log(cars)
            const allcars = cars.map(({name, type, id}) => {
                return (
                    <div key={id}>
                        <p> <strong>Name:</strong>  {name}</p>
                        <p><strong>Type:</strong> {type}</p>
                    </div>)
            })
        
        return (

            <div>
                <p>{allcars}</p>
            </div>
            // <div className="container">
            //     <div className="content">
            //         <h1 className="header">Cars List</h1>
            //     </div>


            //     <Row className="container-fluid">
            //         {cars.map((car) => {
            //             return (
            //                 <div className="col-sm-3 card" key={car.id}>
            //                     <p> <strong>Name:</strong>  {car.name}</p>
            //                     <p><strong>Type:</strong> {car.type}</p>
            //                 </div>
            //             );
            //         })}
            //     </Row>


            //     <Forms addCars={this.addCars} />

            // </div>

        );

    }
}
export default Cars