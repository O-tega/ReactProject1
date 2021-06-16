import React from 'react'
import { Row, Col,} from 'react-bootstrap'
import { Link } from 'react-router-dom';



class Cars extends React.Component {
    constructor() {
        super();
        this.state = {


        }
    }


    render() {
        console.log(this.props)
        let { cars } = this.props;
        // let { carList } = this.state
        console.log(cars)
        // console.log(carList)
        // console.log(this.props)
        // const { cars }=this.props;
        // console.log(cars)
        //     const allcars = cars.map(({name, type, id}) => {
        //         return (
        //             <div key={id}>
        //                 <p> <strong>Name:</strong>  {name}</p>
        //                 <p><strong>Type:</strong> {type}</p>
        //             </div>)
        //     })
        
        return (

            <div className="container">
                <div className="content">
                    <h1 className="header">Cars List</h1>
                </div>


                <Row className="container-fluid">
                    {cars.map(({name, type, id}) => {
                        return (
                            <div className="col-sm-3 card" key={id}>
                                <p> <strong>Name:</strong>  {name}</p>
                                <p><strong>Type:</strong> {type}</p>
                                {/* <Link to="/descr">Read More...</Link> */}
                                <span>
                                    <Link to="/cars/:id">
                                <input className="btn btn-outline-success btn-sm container" value="Read more..." />
                                    </Link>
                                </span>
                            </div>
                        );
                    })}
                </Row>


            

            </div>

        );

    }
}
export default Cars