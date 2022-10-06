import React from "react";
import  '../styles/start.css'
import {Link} from 'react-router-dom'
export default function Start(){
    
    return(

        <div className="startBackground">
          <div className="button"><Link to={'/home'}>Welcome to Videogames!</Link></div>  
            
        </div>



    )

}

