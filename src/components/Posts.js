import React from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'


class Posts extends React.Component{
   
    render(){

        const {posts}=this.props 
        const postList = posts.map((element)=> {
            return(
                <Col md={5} className="mb-4 bg-light mx-3" key ={element.id }>
                    <h4>{element.title}</h4>
                    <p>{element.body}</p>
                </Col>
            )
        })
        return(
            <div>
                <h1>My Post Class</h1>
                <Row className="justify-content-center">{postList}</Row>
            </div>
        )
    }
}


export default Posts;