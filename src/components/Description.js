import axios from 'axios';
import {React, Component} from 'react';


class Description extends Component{
    componentDidMount(){
        let{descr}= this.props
        // axios.get('http://localhost:3000/cars'+ this.props.match.params.id)


    }

    render(){
        const{descr}=this.props
        const {params} = this.props.match
        console.log(this.props)
        console.log(params)
        console.log(descr.length)
        const details = descr.map((element)=>{
            return(
                <div>
                    <p>{element.name}</p>
                    <p>{element.type}</p>
                </div>
            )
        })
        return(
            <div>
                <h1>Link here</h1>
            </div>
        )
    }
}


export default Description;