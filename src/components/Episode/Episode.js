import React,{useState} from 'react'

const Episode = ({episode,onChangeEpisode}) => {
    return (
        <div  className="ui inverted primary basic button" onClick={()=>{onChangeEpisode(episode.url)}}>
            {episode.episode}
        </div>
    )
}

export default Episode;
