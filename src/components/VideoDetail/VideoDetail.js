import React,{useState} from 'react';
import { useEffect } from 'react/cjs/react.development';
import ListEpisode from '../ListEpisode/ListEpisode';
const VideoDetail = ({movie}) => {
    const [episode,setEpisode]=useState('');
    
    useEffect(()=>{
        if(movie){
             setEpisode(movie.episode[0].url)
        }   
    },[movie])
    
    if(movie){
        return (
            <div>
                <div className="ui embed">
                    <iframe src={episode}/>
                </div>
                <div className="ui segment">
                    <div className="header">{movie.title}</div>
                    <ListEpisode episodeList={movie.episode} onChangeEpisode={setEpisode}/>
                </div>
            </div>
        )   
    }else{ 
        return null;
    }
}

export default VideoDetail
