import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function Photowall(props){
    return <div>
        <Link className='addIcon' to='/Addphoto'>Click Me</Link>
         <div className="photoGrid">
         {props.posts.map((post,index)=><Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
         </div>
         </div>
}

Photowall.protoTypes={
    posts:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired

}

export default Photowall