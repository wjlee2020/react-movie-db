import React, { useState } from 'react';
import MovieCard from './MovieCard';

function SearchMovies() {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e0e2cf4be05739ec15aea023b21e0f1e&language=en-US&query=${query}&page=1&include_adult=false`

    async function getMovies(e) {
        e.preventDefault()
        let response = await fetch(url)
        let data = await response.json()
        // console.log(data)
        setMovies(data.results)
    }

    return (
        <div>
            <form className="form" onSubmit={getMovies}>
                <label 
                    className="label"
                    htmlFor="query"
                    name="query"
                    placeholder="query">
                        Movie Name
                </label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="eg: Jurassic Park"
                />
                <button className="button" type="submit">Submit</button>
            </form>

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default SearchMovies;