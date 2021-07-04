import React, { useEffect, useState } from 'react';
import SlideItem from './SlideItem/SlideItem';
// import './Style.css'


const SlideBar = ({listmovie}) => {
  const[index,setIndex]=useState(0);
  useEffect(()=>{
    const timeid=setTimeout(() => {
      if(index===listmovie.length-1){
        setIndex(0)
      }else{
        setIndex(index+1)
      }

    }, 3000);
    return ()=>clearTimeout(timeid)
  })
      return (
        <div className="ui segment">
            <div className="ui container" >
                <SlideItem movie={listmovie[index].movie}/>
            </div>    
        </div>
      )
  }

export default SlideBar
