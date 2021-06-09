import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Home from './components/Home'
import Products from './components/Products'
import { Link, Route } from 'react-router-dom'
import Posts from './components/Posts'



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            err: {},
        }
    }

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com.posts/')
            .then((response) => {
                this.setState({
                    post: response.data,
                });
            })
            .catch((err) => {
                this.setState({
                    err: err.response,
                })
            })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/post">Posts</Link>
                    </li>
                </ul>


                <Route path="/" exact component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/post" render={(routerProps) => (
                    <Posts {...routerProps} posts={this.state.posts} />
                )} />
            </div>
        )
    }
}



export default App;