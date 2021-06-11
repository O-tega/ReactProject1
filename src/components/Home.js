import React from 'react';
import {Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Col, Row} from 'react-bootstrap'
import Cars from './Cars'
import Phones from './Phones'



class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <Jumbotron>

                <Row>
                    <Col>
                        <div className="card shadow text-center">
                            <p className=" container1 mt-2">The link below will take you to the page where you can update the cars list. <strong>Note:</strong> this feature is only for the admin or content uploader...</p>

                                <p> <Link to="/cars" className="btn btn-outline-primary btn-sm shadow">update Cars</Link></p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card shadow text-center">
                            <p className="container1 mt-2">The link below will take you to the page where you can update the phones list. <strong>Note:</strong> this feature is only for the admin or content uploader...</p>

                            <p><Link to="/phones" className="btn btn-outline-primary btn-sm shadow">update Phones</Link></p>
                        </div>
                    </Col>
                </Row>
                </Jumbotron>



                <Route path="/cars" Component={Cars}/>
                <Route path="/phones" Component={Phones}/>
            </div>
        )
    }
}

export default Home;