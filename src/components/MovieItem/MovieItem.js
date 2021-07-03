import React from 'react';
import './Style.css';

const MovieItem = ({movie,onMovieClick}) => {
    return (
        <div className="movie-item item " onClick={()=>onMovieClick(movie)}>
            <div className="ui image">
                {/* <img src={movie.imageUrl}/> */}
            </div>
            <div className="content">
                <div className="header">
                    {movie.title}
                </div>
                <div className="meta">
                    {movie.category}
                </div>
                <div className="description">
                   <p> {movie.episode.length} tập </p>
                </div>
            </div>
        </div>
    )
}

export default MovieItem;
