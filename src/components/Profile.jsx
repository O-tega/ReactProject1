import React from 'react'

const Profile=(props)=>{
    const {firstname, lastname, age, hobbies, className} = props;
    let hobby = hobbies.map((element)=>{
        return <li>{element}</li>
    });
        

    return(
        <div className = {className} style ={{padding:'10px', color:'#fff', fontSize:'20px'}}>
            <div style={cardStyle}>
            <h1>My Profile</h1>
            <h4>Firstname: {firstname}</h4>
            <h4>lastname: {lastname}</h4>
            <h4>age: {age}</h4>
            <h4>Hobbies:</h4>
            <ul style={hobbyStyle}>{hobby}</ul>
            </div>
        </div>
    );
}

const cardStyle ={
    border: '1px solid black',
    padding: '40px',
    borderRadius:'20px'
};

const hobbyStyle={
    backgroundColor:'#fff',
    color:'#000',
    borderRadius:'10px',

}


export default Profile