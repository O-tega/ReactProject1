import React from 'react';
import { Form } from 'react-bootstrap';
import FormElement from './FormElement';


class Forms extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            type: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCars(this.state);
        console.log(this.state)

    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormElement className='form-control' type='text'
                    placeholder='enter name'
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange} />
                <FormElement className='form-control' type='text'
                    placeholder='type'
                    value={this.state.type}
                    name="type"
                    onChange={this.handleChange} />
                <FormElement type='submit' value='add new car' className="btn btn-outline-primary" />
            </form>
        );

    }
}


export default Forms;