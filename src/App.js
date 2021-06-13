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
  constructor() {
    super();
    this.state = {
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
          <li className="navBar-item">
            <Link to="/post" className="style"> Posts</Link>
          </li>
          </span>
        </ul>
        
        
        <Route path="/" exact component={Home}/>
        <Route path="/cars" component={Cars}/>
        <Route path="/phones" component={Phones}/> 
        <Route
         path="/post"
         render={(routerProps)=>(
           <Posts {...routerProps} posts={this.state.posts}/>
         )}/>  
      </div>
    )
  }
}


export default App;