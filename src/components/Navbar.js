import { Menulist } from "./MenuList";
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar=()=>{
    const [clicked,setClicked]=useState(false)
    const menuList=Menulist.map(({title,url},index)=>{
        return (
            <li key={index}>
               <NavLink to={url} activeClassName='active' exact >{title}</NavLink>
            </li>
        )
    })
    const handleClick=()=>{
        setClicked(!clicked)
    }
   
    return(
        <nav id='nav'>
            <div className='logo'>
                VPN<font>Lab</font>
            </div>
            <div>
                <i className={clicked?'fa fa-times':'fa fa-bars'} onClick={handleClick}></i>
            </div>
            <div>
                <ul className={clicked?'menu-list':'menu-list close'}>
                    {menuList}
                </ul>
            </div>
        </nav>
    )
        
}
export default Navbar;