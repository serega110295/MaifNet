import React from 'react';
import s from './Friends.module.css'


const Friends = (props) =>{
    return(
        <div className = {s.friends}>
        <a href='#'>Друзья:</a>
        <div className ={s.friendsAvatar}>
          <div className={s.item}>
              <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" srcset=""/>
            Андрей
              </div>
          <div className={s.item}>
              <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" srcset=""/>
            Янис
              </div>
          <div className={s.item}>
              <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" srcset=""/>
            Валентин
              </div>
        </div>
      </div>
    )
}

export default Friends;