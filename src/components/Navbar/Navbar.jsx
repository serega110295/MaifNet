import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css'



const Navbar = (props) => {

  let sideBarElement = props.navdata.map(p => <div className={s.item}>
    <NavLink to={p.url}>{p.name}</NavLink>
  </div>);


  return (
    <nav className={s.nav}>
      {sideBarElement}
      <div className={`${s.item} ${s.setings}`}>
        <a href="#">Настройки</a>
      </div>
      <Friends />
    </nav>
  )
}
export default Navbar;