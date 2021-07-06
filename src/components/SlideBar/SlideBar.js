import React, { useEffect, useState } from 'react';
import SlideItem from './SlideItem/SlideItem';
import './Style.css'


const SlideBar = ({listmovie}) => {
  const[current,setCurrent]=useState(0);
  const length=listmovie.length;

  const nextSlide=()=>{
    setCurrent(current===length-1?0:current+1)
  }
  const prevSlide=()=>{
    setCurrent(current===0?length-1:current-1)
  }
  useEffect(()=>{
    const timeid=setTimeout(() => {
      if(current===length-1){
        setCurrent(0)
      }else{
        setCurrent(current+1)
      }

    }, 3000);
    return ()=>clearTimeout(timeid)
  });

  const renderImgMovie=listmovie.map((movie,index)=>{

    return(
      <div className={index===current?'slide active':'slide'} key={index}>
          {index===current&&(<SlideItem movie={movie.movie}/>)}         
      </div>
    )
  });

      return (
        <section className="slider">
            <i className="angle left big icon left-arrow" onClick={prevSlide}/>
            <i className="angle right big icon right-arrow" onClick={nextSlide}/>
             {renderImgMovie}  
        </section>
      )
  }

export default SlideBar
