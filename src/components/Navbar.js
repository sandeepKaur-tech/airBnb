import React from "react";
import airbnb from "../images/airbnb-logo.png"
import grid from "../images/photo-grid.png"
import "../App.css"

export default function Navbar(){
    return (
        <>
    <nav className="logo">
           <img  src={airbnb}/>
    </nav>
         <section className="hero">
          <img src={grid} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
  
   </>
       
    )
}