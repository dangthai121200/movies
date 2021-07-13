import React from 'react';
import './Style.css'

const InformationMovie = ({movie,onClick}) => {
    if(!movie){
        return null;
    }
    return (
        <div className=" ui segment">
            <div className="container">
                    <div className="image image-item">
                      <img alt="ảnh" src={movie.imageUrl}/>
                      <div className="content">
                          
                      </div>
                    </div>
                    <div className="extra content">          
                        <button class="ui button container" onClick={()=>onClick(true)}>Xem phim</button>
                    </div>           
            </div>
        </div>  
    )
}

export default InformationMovie;