import React from "react";


const MovieCard=({props})=>{
    return(
        <div className="movie">
        <div>
            <p>{props.Year}</p>
        </div>

        <div>
            <img src={props.Poster} alt={props.Title}/>
        </div>

        <div>
            <h4>{props.Type}</h4>
            <h3>{props.Title}</h3>
        </div>
    </div>

    )
    

}

export default MovieCard;
