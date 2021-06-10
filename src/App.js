import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import Posts from './components/Posts'
import Cars from './components/Cars'
import Phones from './components/Phones'
import Forms from './components/Forms'




class App extends React.Component{
  constructor(){
    super();

    this.state={
      phonesList:[
        {
          name: 'Samsung A11',
          quantity: 34,
          colours: ['black', 'green', 'blue'],
          date: 'wed May 19 2021 2:08pm',
          price: '$50'
        },
        {
          name: 'Itel p33 pro',
          quantity: 100,
          colours: ['black', 'green', 'blue'],
          date: 'wed May 20 2021 8:00am',
          price: '$25'
        },
        {
          name: 'Iphone 12 S pro',
          quantity: 13,
          colours: ['black', 'red', 'silver gray'],
          date: 'wed May 1 2021 8:00am',
          price: '$900',
        }
      ],

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
  addCars = (incomingState) => {
    let newCars = { ...incomingState }
    console.log(newCars)
    this.setState({
      carList: [...this.state.carList, newCars]
    })

  }

  render(){
    return(
      <div>
        <Cars cars={this.state.carList}/>
        <Phones phones={this.state.phonesList}/>
        <h1>React Classwork</h1>
        <Forms addCars={this.addCars} />

      </div>
    )
  }
}


export default App;