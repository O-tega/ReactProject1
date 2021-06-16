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
import Forms from './components/Forms'
import PhoneForm from './components/PhoneForm'
import Description from './components/Description'




class App extends React.Component{
  constructor() {
    super();
    this.state = {
      carList: [
        {
          id: 1,
          name: 'Rolls Royce',
          type: 'Sweptail'
        },
        {
          id: 2,
          name: 'Mercedes Benz',
          type: 'G33',
        },
        {
          id: 3,
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
      err: {},
    }
  }
      addCars = (incomingState, idn) => {
        const{carList}=this.state
        let newId =  carList.length + 1;
        let newCars = { id:newId, ...incomingState }
        console.log(newCars)
        this.setState({
            carList: [...this.state.carList, newCars]
        })

    }

  addPhones = (incomingState) => {
    let newPhones = { ...incomingState }
    this.setState({
      phonesList: [...this.state.phonesList, newPhones]
    })
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
          render = { routerProps => < Cars {...routerProps } cars = { this.state.carList } />}/>
          <Route path="/phones"
          render={(routerProps)=>
            (<Phones {...routerProps} phones={this.state.phonesList}/>)
          }/>
        <Route path="post"
        render={routerProps =>
        <Posts {...routerProps} posts = {this.state.posts}/>}/>
        <Route path="/cars/form"
        render={routerProps=>
        <Forms {...routerProps} addCars={this.addCars}/>}/>
        <Route path="/phones/phoneform"
        render={routerProps=>
        <PhoneForm {...routerProps} newPhones={this.addPhones}/>}/>
        {/* <Route path="/cars/:id"
        render={routerProps=>
        <Description {...routerProps} descr={this.state.carList}/>}/> */}


      </div>
    )
  }
}
    // constructor(){
    //   super();
    //   this.state={
    //     products : [
    //       {id:1, name: 'Iphone', type: 'iphone 12s'},
    //       {id:1, name: 'Samsung', type: 's20 ultra'},
    //       {id:1, name: 'Mercedes', type: 'maybach 6'},
    //       {id:1, name: 'Vegetables', type: 'Ugwu leaf'}
    //     ]
    //   }
    // }

//     render(){
//       return(
//         <div>
//           <Link to="/cars">Cars</Link>




//           <Route path="/cars"
//           render={routerProps => <Cars {...routerProps} cars={this.state.carList}/>}/>
//         </div>
//       )
//     }
// }


export default App;