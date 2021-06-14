import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios'
import {Route, Link} from 'react-router-dom'
import Posts from './components/Posts'
import Cars from './components/Cars'
import Phones from './components/Phones'
import Home from './components/Home'
import Navigation from './components/Navigation'




class App extends React.Component{
  constructor() {
    super();
    this.state = {
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
      ],
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

      posts: [],
      err: {}
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response)
        this.setState({
          posts: response.data
        })
      }).catch((err) => {
        this.setState({
          err: err.response
        })
      });
  }


  render(){
    return(
      <div>
        <Navigation />
        <Route path="/" exact component={Home}/>
        <Route path="/cars"
         render={(routerProps)=> 
         <Cars {...routerProps} cars={this.state.carList}/>
         }/>
         <Route path="/phones"
          render={(routerProps)=>
            (<Phones {...routerProps} phones={this.state.phonesList}/>)
          }/>
        {/* <Posts posts={this.state.posts}/>  */}
      </div>
    )
  }
}


export default App;