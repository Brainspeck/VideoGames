import React from "react";
import '../styles/home.css';
import {Link} from 'react-router-dom'
export default function Home(){
    return(
            <div className="homeBackground">
                <h1 className="title">HOME</h1>
                <div className="buttonCreate"><Link to={'/create'}>Create New Game</Link></div> 
                <div className="buttonDetails"><Link to={'/details'}> Details</Link></div>
            </div>
            
    )
}