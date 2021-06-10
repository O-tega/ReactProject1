import React, {Component} from 'react';
import {Jumbotron, Col, Row} from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className="container-fluid bg-light p-5">
                <Row className = "justify-content-center">
                    <Col md={8}/>
                        <Jumbotron>
                        <h1>Home</h1>
                        <p className = "lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium explicabo quod laboriosam reiciendis quam minima itaque, possimus dignissimos, deserunt ad blanditiis recusandae neque exercitationem, dolorem nesciunt alias ipsam quos.
                        </p>
                        <Link to="/product" className = "btn btn-outline-primary"> read more...</Link>
                </Jumbotron>
                </Row>

            </div>
        );
    }
}

export default Home;