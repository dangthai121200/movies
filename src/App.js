import React,{useState,useEffect} from 'react';
import useMovies from './hooks/useMovies';
import ListMovies from './components/ListMovies/ListMovies';
import VideoDetail from './components/VideoDetail/VideoDetail';
const App = () => {
    const movies=useMovies();
    const [movie,setSelectMovie]=useState();  
    return (
        <div>
            <VideoDetail movie={movie}/>   
            <ListMovies ListMovies={movies[0].phimbo} onMovieClick={setSelectMovie} />     
        </div>
    )
}

export default App;
