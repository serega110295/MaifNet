import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = (props) =>{
    return(
        <header className={s.header}>
        <div>
        <img src="https://img.icons8.com/nolan/2x/discord-new-logo.png" />
        <h3>MaifNet.com</h3>
        </div>
        <div className = {s.login__block}>
          {props.isAuth === true 
          ? <NavLink to = {`/Profile/${props.id}`}>{props.login}</NavLink>
          :<NavLink to = {'/login'}>Вход</NavLink>}
          
        </div>
      </header>
    )
}
export default Header;