import React from 'react';
import Navbar from "./Navbar"

const Header = () =>{
     return (
         <div style = {{backgroundColor:"gray", height: "180px"}}>
             <Navbar></Navbar>
           <a>HOME</a>
             <h1>Clean Blog</h1>
             <h3>A Blog Theame by Bootstrap</h3>
         </div>
     )
}

export default Header