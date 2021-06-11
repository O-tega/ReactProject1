import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormElement from './FormElement';

class PhoneForm extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            quantity:'',
            date:'',
            price:'',
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.newPhones(this.state);
        }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <FormElement type="text"
                 placeholder = "enter the name of phone"
                 value={this.state.name}
                 name = "name"
                 onChange={this.handleChange}
                 className="form-control"/>

                <FormElement type="text" 
                 placeholder = "enter quantity"
                 value={this.state.quantity}
                 name="quantity"
                 onChange={this.handleChange}
                 className="form-control"/>

                <FormElement type="text"
                 placeholder = "what is the date of delivery"
                 value={this.state.date}
                 name="date"
                 onChange={this.handleChange}
                 className="form-control"/>

                <FormElement type="text"
                 placeholder = "on what date"
                 value={this.state.price}
                 name="price"
                 onChange={this.handleChange}
                 className="form-control"/>

                <FormElement type="submit" placeholder="new Phone"
                value="add new phone"
                 className="btn btn-outline-primary"/>
            </form>
        )
    }
}

export default PhoneForm;