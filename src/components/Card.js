import React  from "react";
import star from "../images/star.webp"
import airbnb from "../images/airbnb-logo copy.png"
import "../App.css"

export default function Card(props){

    return(
        <div className="card">
             <img className="card-image"   src={`/images/${props.image}`}  />
             <div className="card--stats">
                <img src={star}/>
                <span>{props.rating}</span>
                <span>({props.review}) • </span>
                <span>USA</span>
             </div>
             <p>{props.title}</p>
            <p>From ${props.price}/ person</p>
        </div>

    )
}