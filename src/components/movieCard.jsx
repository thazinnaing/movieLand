import React from "react";
import './movieCard.css'


const MovieCard=({props})=>{
    return(
        <div className="movie">
        <div className="year">
            <p>{props.Year}</p>
        </div>

        <div className="cardImage">
            <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/3'} alt={props.Title}/>
        </div>

        <div className="description">
            <h4>{props.Type}</h4>
            <h3>{props.Title}</h3>
        </div>
    </div>

    )
    

}

export default MovieCard;
