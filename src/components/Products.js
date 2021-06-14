import react, {Component} from 'react';

class Products extends Component{
    render(){
        console.log(this.props)
        const{prod} = this.props
        console.log(prod)

        const allprod = prod.map(({name, type, id})=>{
            return(
                <div keys={id}>
                    <p>{name}</p>
                    <p>{type}</p>
                </div>
            )
        }) 
        return(
            <div>
                <h1>Products</h1>
                <p>{allprod}</p>
            </div>
        );
    }
} 

export default Products;