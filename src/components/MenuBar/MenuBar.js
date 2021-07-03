import React from 'react';
import DropDown from '../DropDown/DropDown';
import './Style.css'

const MenuBar = ({listcategory,onChangeCategory}) => {
    return (
        <div className="ui menu menu-bar">
            <a href="" className="item button"> 
                Trang chủ
            </a>
            <DropDown onChangeCategory={onChangeCategory} listcategory={listcategory}/>
        </div>
    )
}
export default MenuBar
