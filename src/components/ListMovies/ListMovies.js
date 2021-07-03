import React from 'react';
import MovieItem from '../MovieItem/MovieItem';

const ListMovies = ({ListMovies,onMovieClick}) => {
    const renderedListMovie=ListMovies?ListMovies.map(movie=>{
        return (
            <MovieItem movie={movie} onMovieClick={onMovieClick}/>
        )
    }):'';
    return (
        <div className="ui divided list">
                {renderedListMovie}
        </div>
    )
}

export default ListMovies;
