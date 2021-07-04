import React from 'react';
import './Style.css';

const MovieItem = ({movie,onMovieClick}) => {
const onClick=()=>{
    onMovieClick(movie);
    window.scrollTo(0,0)
}
    return (
        <div   className="movie-item ui card " onClick={onClick}>
            <div className="image">
                <img alt="ảnh" style={{height:'300px'}} src={movie.imageUrl}/>
            </div>
            <div className="content">
                <div className="header">
                    {movie.title}
                </div>
                <div className="meta">
                    {movie.category}
                </div>
            </div>
            <div className="extra content">
                <i className="video icon"></i>
                {movie.episode.length} tập
            </div>
        </div>
    )
}
export default MovieItem;
