import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic5.jpg'
import pic4 from '../assets/pic4.jpeg'
import pic5 from '../assets/pic3.jpeg'

import './style.css'

import React from 'react';

const arr = [
    {
        backgroundImage:`url(${pic1})`,
        text:'HEY'
    },
    {
        backgroundImage:`url(${pic2})`,
        text:"LET'S"
    },
    {
        backgroundImage:`url(${pic3})`,
        text:"GIVE"
    },
    {
        backgroundImage:`url(${pic4})`,
        text:"ALL"
    },
    {
        backgroundImage:`url(${pic5})`,
        text:"YOU CAN"
    }
]



function posts(){
    const post = arr.map((post)=>
    <div className='wrapper-post' style={post}>
        <h1>{post.text}</h1>
    </div>
    );
    return post;
}

function Component_body(){
return(
    <div className='grid'>
        {posts()}
    </div>
)
}


export default Component_body;