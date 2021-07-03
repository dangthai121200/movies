import React from 'react';
import Episode from '../Episode/Episode';
const ListEpisode = ({episodeList,onChangeEpisode}) => {
    const renderedEpisode=episodeList.map(episode=>{
        return <Episode key={episode.episode} episode={episode} onChangeEpisode={onChangeEpisode} />
    });
    return (
        <div className="ui inverted segment">
            {renderedEpisode}
        </div>
    )
}

export default ListEpisode
