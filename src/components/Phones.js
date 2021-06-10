import React from 'react';
import PhoneForm from './PhoneForm'



class Phones extends React.Component {
    constructor() {
        super();
        this.state={
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
    addPhones = (incomingState) => {
        let newPhones = { ...incomingState }
        this.setState({
            phonesList: [...this.state.phonesList, newPhones]
        })
    }

    render(){
        let {phones} = this.props;
        return(
            <div>
                <h1>This is phones list</h1>
                {phones.map((phone, phoneid)=>{
                   return(
                       <div key={phoneid}>
                           <p>Name: {phone.name}</p>
                           <p>Quantity: {phone.quantity}</p>
                           <p>Date: {phone.date}</p>
                           <p>Price: {phone.price}</p>
                       </div>
                   ) 
                })}


                <PhoneForm newPhones={this.addPhones} />
            </div>
        )
    }
}

export default Phones;