import React from 'react';
import s from './Header.module.css'


const Header = () =>{
    return(
        <header className={s.header}>
        <img src="https://img.icons8.com/nolan/2x/discord-new-logo.png" />
        <h3>MaifNet.com</h3>
      </header>
    )
}
export default Header;