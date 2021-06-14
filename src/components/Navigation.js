import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';
import Cars from './Cars';
import Phones from './Phones';
import Forms from './Forms';
import PhoneForm from './PhoneForm';
import Posts from './Posts';
import Home from './Home'


// creating a responsive Navbar for all the pages in the document
class Navigation extends React.Component{
    constructor(){
        super();
    }

    render(){
        let{cars} = this.props;
        let{phones} = this.props;
        let{posts} = this.props;
        return(
            <div>
                <Navbar bg="light" expand="md">
                    <Navbar.Brand as={Link} to="/">
                        E-commerce Shop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
                        <Nav.Link as={Link} to="/phones">Phones</Nav.Link>
                        <Nav.Link as={Link} to="/post">Post</Nav.Link>
                    <NavDropdown title="Update" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/cars/form">Car</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/phones/phoneform">Phone</NavDropdown.Item>
                    </NavDropdown>
                        </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="search" className="mr-sm-2"/>
                        <input className="btn btn-outline-success btn-sm" value="Search"/>
                    </Form> */}
                    </Navbar.Collapse>
                </Navbar>


                {/* <Route path="/" exact component={Home}/> */}
                {/* <Route path="/cars"  component={Cars}/> */}
                {/* <Route path="/phones" component={Phones}/> */}
                {/* <Route path="/form" component={Forms}/> */}
                <Route path="/phoneform" component={PhoneForm}/>
                {/* <Route path="/post" component={Posts}/> */}
         
            </div>
        )
    }
}



export default Navigation;