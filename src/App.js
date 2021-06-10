import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import Posts from './components/Posts'
import Cars from './components/Cars'
import Phones from './components/Phones'
import Home from './components/Home'




class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cars">Update cars</Link>
          </li>
          <li>
            <Link to="phones"> Update Phones</Link>
          </li>
        </ul>
        <h1>React Classwork</h1><br/><br/>
        
        
        <Route path="/" exact component={Home}/>
        <Route path="/cars" component={Cars}/>
        <Route path="/phones" component={Phones}/>   
      </div>
    )
  }
}


export default App;