import React, { useState,useEffect } from 'react';
import './Style.css'
const SlideItem = ({movie}) => {
    if(movie){
        return (
            <div className="item-img">
                    <img  alt="ảnh" src={movie.imageUrl}/>
            </div>
        ) 
    }else{
        return null
    }  
}

export default SlideItem;
