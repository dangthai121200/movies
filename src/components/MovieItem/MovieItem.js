import React from 'react';
import './Style.css';

const MovieItem = ({movie,onMovieClick}) => {
    return (
        <div   className="movie-item ui card " onClick={()=>onMovieClick(movie)}>
            <div className="image">
                <img style={{height:'300px'}} src={movie.imageUrl}/>
            </div>
            <div className="content">
                <div className="header">
                    {movie.title}
                </div>
                <div className="meta">
                    {movie.category}
                </div>
            </div>
            <div class="extra content">
                <i className="video icon"></i>
                {movie.episode.length} tập
            </div>
        </div>
    )
}
export default MovieItem;
