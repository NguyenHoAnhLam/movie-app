import React from 'react';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img
            className="movie-img"
            src={
                poster_path
                    ? IMG_PATH + poster_path
                    : 'https://upload.wikimedia.org/wikipedia/vi/f/f8/Avengers_-_Age_of_Utron_Poster.jpg'
            }
            alt={title}
        />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie;
