import React, { useState, useEffect } from 'react';

import Movie from './components/Movie';

const API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        getMovies(API_URL);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchValue) {
            getMovies(SEARCH_API + searchValue);
            setSearchValue('');
        }
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <header className="movie-header">
                <form onSubmit={handleSubmit}>
                    <input
                        className="search"
                        placeholder="Search..."
                        type="search"
                        value={searchValue}
                        onChange={handleChange}
                    />
                </form>
            </header>
            <div className="movie-container">
                {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </>
    );
}

export default App;
