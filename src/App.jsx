import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./components/movieCard.jsx";



const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=7e69ef52';


function App() {

  const [movies, setMovies]=useState([]);

  const SearchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    console.log(data.Search);

    setMovies(data.Search);
  }
  useEffect(()=>{
    SearchMovies('Spiderman');
  },[])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
        placeholder="Search for movies"
        onChange={()=>{

        }}
        />
        <img
        src={SearchIcon}
        alt="searchicon"
        onClick={()=>{

        }}
        />
        {
          movies?.length>0
          ?(
            <div className="movieContainer">
              {movies.map((movie)=>{
                console.log("movie",movie);
                <MovieCard props={movie}/>
              })
              }
            </div>
          ):(
            <div className="empty">
              <h2>No movies found!</h2>
            </div>
          )
        }
      
        
        
      </div>

    </div>
  )

}


export default App
