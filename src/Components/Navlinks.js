import React from 'react'
import { NavLink } from 'react-router-dom';
import links from '../Utils/Links';

function Navlinks({toggleSidebar}) {
  return (
    <div className="nav-links">
          {links.map((link)=>{
            const{id,text,icon,path} = link;
            return <NavLink key={id} onClick={toggleSidebar} to={path} className={({isActive})=>
             isActive ? 'nav-link active':'nav-link'
            }><span className="icon">{icon}</span>{text}
            </NavLink>
          })}
         </div>
  )
}

export default Navlinks