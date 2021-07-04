import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import Loading from '../Loading/Loading';
import './Style.css';
const ListMovies = ({ListMovies,onMovieClick}) => {

    const renderedListMovie=ListMovies?ListMovies.map(movie=>{
        return <MovieItem key={movie.url} movie={movie} onMovieClick={onMovieClick} />
    }):null
    const renderedLoading=ListMovies?
    (
    <div className="ui piled segment ">
        <div className="ui divided list movie-list">
            {renderedListMovie}
        </div>
    </div>
    ):<Loading message="Đang tải phim!"/>
    return (
        <div>
            {renderedLoading}     
        </div>
            
    )
}

export default ListMovies;
