import React,{useState,useEffect} from 'react';
import useMovies from './hooks/useMovies';
import ListMovies from './components/ListMovies/ListMovies';
import VideoDetail from './components/VideoDetail/VideoDetail';
import MenuBar from './components/MenuBar/MenuBar';
import SlideBar from './components/SlideBar/SlideBar';
import InformationMovie from './components/IformationMovie/InformationMovie';

const categoryList=[
    {category:'Phim bộ',list:null},
    {category:'Phim chiếu rap',list:null},
    {category:'Phim hoạt hình',list:null},
    {category:'Phim lẻ',list:null},
];
const listSlideShow=[{movie:null},{movie:null},{movie:null},{movie:null}];
var a;
const App = () => {
    const movies=useMovies();
    const [movie,setSelectMovie]=useState(null);  
    const[categorymovie,setCategoryMovie]=useState(null);
    const[current,setCurrent]=useState(false)

        useEffect(()=>{
            if(!categorymovie){
                setCategoryMovie(categoryList[0].list)
            }
        },[movies])

    useEffect(()=>{
        setSelectMovie(null)
    },[categorymovie]);

    if(movies[0]){
   
        //tạo danh sách thể loại phim
        categoryList[0].list=movies[0].phimbo
        categoryList[1].list=movies[0].phimchieurap
        categoryList[2].list=movies[0].phimhoathinh
        categoryList[3].list=movies[0].phimle

        //Thêm danh sách phim chiếu slide show
        if(  categoryList[0].list&&categoryList[1].list&&categoryList[2].list&&categoryList[3].list){

            listSlideShow[0].movie=categoryList[0].list[0]
            listSlideShow[1].movie=categoryList[1].list[0]
            listSlideShow[2].movie=categoryList[2].list[0]
            listSlideShow[3].movie=categoryList[3].list[0]
            // console.log(listSlideShow)
        }
       
    }
    return (         
            <div>      
                <MenuBar onChangeCategory={setCategoryMovie} listcategory={categoryList}/>
                {movie?
                    current?
                    <VideoDetail movie={movie}/>:<InformationMovie onClick={setCurrent} movie={movie}/>
                :<SlideBar listmovie={listSlideShow}/>}   


                <div className="ui piled segment">
                    <ListMovies ListMovies={categorymovie} onMovieClick={setSelectMovie} onCurenClick={setCurrent} />
                </div>         
            </div>

    )
}

export default App;
