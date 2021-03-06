import React,{useState,useEffect} from 'react';
import ListEpisode from '../ListEpisode/ListEpisode';
const VideoDetail = ({movie}) => {
    const [episode,setEpisode]=useState(''); 
    useEffect(()=>{
        if(movie){
            if(movie.episode[0]){
                setEpisode(movie.episode[0].url)
            }
            else{
                setEpisode('')
            }
             
        }
    },[movie])
    
    if(movie){
        return (
            <div className="ui segment">
                <div className="ui embed">
                    <iframe title="video" src={episode}/>
                </div>
                <p></p>
                <div>
                    <div className="ui header">{movie.title}</div>
                    <ListEpisode episodeList={movie.episode} onChangeEpisode={setEpisode}/>
                </div>
            </div>
        )   
    }else{ 
        return null;
    }
}

export default VideoDetail
