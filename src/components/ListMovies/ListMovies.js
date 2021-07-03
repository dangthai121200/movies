import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import Loading from '../Loading/Loading';
import './Style.css';
const ListMovies = ({ListMovies,onMovieClick}) => {

    const renderedListMovie=ListMovies?ListMovies.map(movie=>{
        return <MovieItem movie={movie} onMovieClick={onMovieClick} />
    }):null
    const renderedLoading=ListMovies?'':<Loading message="Đang tải phim!"/>

    return (
            <div className="ui piled segment ">
                {renderedLoading}
                <div className="ui divided list movie-list">
                    {renderedListMovie}
                </div>
            </div>
    )
}

export default ListMovies;
