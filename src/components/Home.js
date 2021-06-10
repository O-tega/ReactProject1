import React from 'react';
import {Link, Route} from 'react-router-dom';
import Cars from './Cars'
import Phones from './Phones'


class Home extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/cars">update Cars</Link>
                    </li>
                    <li>
                        <Link to="/phones">update Phones</Link>
                    </li>
                </ul>


                <Route path="/cars" Component={Cars}/>
                <Route path="/phones" Component={Phones}/>
            </div>
        )
    }
}

export default Home;