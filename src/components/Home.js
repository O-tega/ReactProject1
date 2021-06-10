import React from 'react';
import {Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cars from './Cars'
import Phones from './Phones'



class Home extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <p>The link to this page will take you to the page where you can update the cars list. <strong>Note:</strong> this feature is only for the admin or content uploader...</p>

                    <p> <Link to="/cars">update Cars</Link></p>
                </div>

                <div>
                    <p>The link to this page will take you to the page where you can update the phones list. <strong>Note:</strong> this feature is only for the admin or content uploader...</p>

                    <p><Link to="/phones">update Phones</Link></p>
                </div>


                <Route path="/cars" Component={Cars}/>
                <Route path="/phones" Component={Phones}/>
            </div>
        )
    }
}

export default Home;