import React from 'react';
import {Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Jumbotron, Col, Row} from 'react-bootstrap'
import Forms from './Forms';
import PhoneForm from './PhoneForm';



class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <Jumbotron>

                <Row>
                    <Col>
                        <div className="card shadow text-center">
                            <p className=" container1 mt-2">The link below will take you to the page where you can update the cars list. <strong>Note:</strong> this feature is only for the admin or content uploader...</p>

                                <p> <Link to="/form" className="btn btn-outline-primary btn-sm shadow">update Cars</Link></p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card shadow text-center">
                            <p className="container1 mt-2">The link below will take you to the page where you can update the phones list. <strong>Note:</strong> this feature is only for the admin or content uploader...</p>

                            <p><Link to="/phoneform" className="btn btn-outline-primary btn-sm shadow">update Phones</Link></p>
                        </div>
                    </Col>
                </Row>
                </Jumbotron>



                <Route path="/form" Component={Forms}/>
                <Route path="/phoneform" Component={PhoneForm}/>
            </div>
        )
    }
}

export default Home;