import React from 'react';
import PhoneForm from './PhoneForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';



class Phones extends React.Component {
    constructor() {
        super();
        this.state={
       
            phonesList: [
                {
                    name: 'Samsung A11',
                    quantity: 34,
                    date: 'wed May 19 2021 2:08pm',
                    price: '$50'
                },
                {
                    name: 'Itel p33 pro',
                    quantity: 100,
                    date: 'wed May 20 2021 8:00am',
                    price: '$25'
                },
                {
                    name: 'Iphone 12 S pro',
                    quantity: 13,
                    date: 'wed May 1 2021 8:00am',
                    price: '$900',
                }
            ],

        }

    }
    addPhones = (incomingState) => {
        let newPhones = { ...incomingState }
        this.setState({
            phonesList: [...this.state.phonesList, newPhones]
        })
    }

    render(){
        // let {phones} = this.props;
        let {phonesList} = this.state
        return(
            <div className="container">
                <div className="content">
                <h1 className="header">Phones List</h1>
                </div>

                <Row className="container-fluid">
                {phonesList.map((phone, phoneid)=>{
                   return(
                       <div key={phoneid} className="col-md-3 card">
                           <span className="adjust"><strong>Name:</strong> {phone.name}</span>
                           <span className="adjust"><strong>Quantity:</strong> {phone.quantity}</span>
                           <span className="adjust"><strong>Date:</strong> {phone.date}</span>
                           <span className="adjust"><strong>Price:</strong> {phone.price}</span>
                           <br/>
                       </div>
                   ) 
                })}
                </Row>


                <PhoneForm newPhones={this.addPhones} />
            </div>
        )
    }
}

export default Phones;