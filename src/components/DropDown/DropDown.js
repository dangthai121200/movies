import React,{useState,useRef,useEffect} from 'react';


const DropDown = ({listcategory,onChangeCategory}) => {
const[open,setOpen]=useState(false);
const ref=useRef();
useEffect(()=>{
    const onBodyClick=(event)=>{
        if(ref.current&&ref.current.contains(event.target)){
            return;
        }
        setOpen(false);
    }
    document.body.addEventListener('click',onBodyClick);
    return ()=> document.body.removeEventListener('click',onBodyClick)
},[])

const renderedCategory=listcategory.map(ca=>{
    return<div key={ca.category} className="item" onClick={()=>onChangeCategory(ca.list)}>{ca.category}</div>
})

    return (
      
        <div ref={ref} className="ui pointing dropdown link item" onClick={()=>setOpen(!open)}>
             <div className="text">Loại phim</div>
              <i className="dropdown icon"></i>
                <div className={`menu ${open?'visible transition':''}`}>
                    {renderedCategory}
                </div>     
        </div>
    )
}

export default DropDown
