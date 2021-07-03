import React,{useState,useEffect} from 'react';
import apimovies from '../api/apiMovies';

const useMovies = () => {
    const [listMovies,setListMovies]=useState([]);
    useEffect(()=>{      
        loadMovies();
    },[]);
    const loadMovies=async()=>{
        const {data}=await apimovies.get();
        setListMovies(data.phim);        
    };
    
    return [listMovies];
}

export default useMovies;
