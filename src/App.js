import React from 'react'
import FormElement from './components/FormElement';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      text:'',
    };
  }

  handleChange = (e) =>{
    this.setState({
      text: e.target.value
    });
  }
  handleClick = (e)=> {
    /* code to change the value of the button from true to false */ 

    if (this.state.show === false) {
      this.setState({

        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    
    };
  }

  render() {

    return (
      <div>
        <h1>Hello React</h1>


        <button type="button" onClick={this.handleClick}> {/*calls the onClick function in the handleClick variable declared up */}
        
          Toggle button
          </button>
        
          {this.state.show &&(
            <div style={{ width: '400px', height: '400px', backgroundColor: 'green' }}>
            </div>
      
          )}

        <h1>Text: {this.state.text}</h1>
        
        {/* <input
        type = "text"
        placeholder = "enter your text"
        value = "this.state.text"
        onChange = {this.handleChange}
        /> */}

        <FormElement
          type="text"
          placeholder="enter your text"
          value={this.state.text}
          onChange={this.handleChange}
        />
         
        
       

        
      </div>
    );
  }
}

export default App