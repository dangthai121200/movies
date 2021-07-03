import React,{useState,useEffect} from 'react';
import useMovies from './hooks/useMovies';
import ListMovies from './components/ListMovies/ListMovies';
import VideoDetail from './components/VideoDetail/VideoDetail';
import MenuBar from './components/MenuBar/MenuBar';

const categoryList=[
    {category:'Phim bộ',list:null},
    {category:'Phim chiếu rap',list:null},
    {category:'Phim hoạt hình',list:null},
    {category:'Phim lẻ',list:null},
];
const App = () => {
    const movies=useMovies();
    const [movie,setSelectMovie]=useState(null);  
    const[categorymovie,setCategoryMovie]=useState(null);

        useEffect(()=>{
            if(!categorymovie){
                setCategoryMovie( categoryList[0].list)
            }
        },[movies])

    useEffect(()=>{
        setSelectMovie(null)
    },[categorymovie]);

    if(movies[0]){
        categoryList[0].list=movies[0].phimbo
        categoryList[1].list=movies[0].phimchieurap
        categoryList[2].list=movies[0].phimhoathinh
        categoryList[3].list=movies[0].phimle
    }

    return (         
            <div>
                <MenuBar onChangeCategory={setCategoryMovie} listcategory={categoryList}/>
                <VideoDetail movie={movie}/>
                <ListMovies ListMovies={categorymovie} onMovieClick={setSelectMovie} />
            </div>

    )
}

export default App;
