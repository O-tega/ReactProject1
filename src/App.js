import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
        <ul className="navBar bg-light">
          <li className="navBar-item">
            <Link to="/" className="btn btn-primary btn-sm">Home</Link>
          </li>
          <span>
          <li className="navBar-item">
            <Link to="/cars" className="style">Update cars</Link>
          </li>
          <li className="navBar-item">
            <Link to="phones" className="style"> Update Phones</Link>
          </li>
          </span>
        </ul>
        
        
        <Route path="/" exact component={Home}/>
        <Route path="/cars" component={Cars}/>
        <Route path="/phones" component={Phones}/>   
      </div>
    )
  }
}


export default App;