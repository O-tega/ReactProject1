import React from 'react';
import PhoneForm from './PhoneForm'
import 'bootstrap/dist/css/bootstrap.min.css';



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
            <div>
                <h1>This is phones list</h1>
                {phonesList.map((phone, phoneid)=>{
                   return(
                       <div key={phoneid}>
                           <span><strong>Name:</strong> {phone.name}</span><br />
                           <span><strong>Quantity:</strong> {phone.quantity}</span><br />
                           <span><strong>Date:</strong> {phone.date}</span><br />
                           <span><strong>Price:</strong> {phone.price}</span><br/>
                           <br/>
                       </div>
                   ) 
                })}


                <PhoneForm newPhones={this.addPhones} />
            </div>
        )
    }
}

export default Phones;