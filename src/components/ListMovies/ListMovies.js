import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import Loading from '../Loading/Loading';
import './Style.css';
const ListMovies = ({ListMovies,onMovieClick,onCurenClick}) => {

    const renderedListMovie=ListMovies?ListMovies.map(movie=>{
        return <MovieItem key={movie.url} movie={movie} onMovieClick={onMovieClick} onCurenClick={onCurenClick} />
    }):null
    const renderedLoading=ListMovies?
    (
    <div>
        <div className="header container"><h2 style={{textAlign:'center'}}>Danh sách phim</h2></div>
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
