import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./components/movieCard.jsx";



const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=7e69ef52';


function App() {

  const [movies, setMovies]=useState([]);
  const [searchTerm, setSearchTerm]=useState("");

  const SearchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();

    setMovies(data.Search);
  }
  useEffect(()=>{
    // SearchMovies(searchTerm);
    SearchMovies("Spiderman");
  },[])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
        type="text"
        placeholder="Search for movies"
        value={searchTerm}
        onChange={()=>{(event)=>{
          // console.log(event.target.value);
          setSearchTerm(event.target.value);
        }}}
        />
        <img
        src={SearchIcon}
        alt="searchicon"
        onClick={()=>{(event)=>{
          SearchMovies(searchTerm);
        }

        }}
        />
        {movies?.length>0
          ? (
              <div className="movieContainer">
                {/* <MovieCard props={movies[0]}/> */}
                {movies.map(movie=>{
                  return(
                    <MovieCard props={movie}/>
                  )
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
