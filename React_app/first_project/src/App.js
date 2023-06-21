import  React, { useEffect, useState } from "react";

import './App.css';
import SearchIcon from './search.svg';
import MovieCart from "./MovieCart";

//API key:  b41222e3 / b6003d8a          (temporory)

const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a';

const App = () => {
    const [movies, setMovies] = useState([]) ;
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }


    return (
        <div className="app">
            <h1>React APP</h1>

            <div className="search">
                <input placeholder="Search for Movies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <img src={SearchIcon} 
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies ?.length > 0
                ? (<div className="container">
                    {movies.map((movie) => 
                    <MovieCart movie={movie} />)}
                  </div>)   
                  : (
                    <div className="empty">
                        <h2>No Movie Found</h2>
                    </div>
                  )
            }
        </div>
    );
}

export default App;
