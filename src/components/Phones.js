import React from 'react';
import PhoneForm from './PhoneForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';



class Phones extends React.Component {
    constructor() {
        super();
        this.state={
        }

    }
  

    render(){
        let {phones} = this.props;
        // let { phonesList } = this.state
        return(
            <div className="container">
                <div className="content">
                <h1 className="header">Phones List</h1>
                </div>

                <Row className="container-fluid">
                {phones.map((phone, phoneid)=>{
                   return(
                       <div key={phoneid} className="col-md-3 card">
                           <span className="adjust"><strong>Name:</strong> {phone.name}</span>
                           <span className="adjust"><strong>Quantity:</strong> {phone.quantity}</span>
                           <span className="adjust"><strong>Price:</strong> {phone.price}</span>
                           <br/>
                       </div>
                   ) 
                })}
                </Row>


            </div>
        )
    }
}

export default Phones;