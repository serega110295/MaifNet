import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {

   let getUsers = () => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUser(response.data.items)
        })
    }
   }

    return (
        <div>
            <button onClick = {getUsers}>Пользователи</button>
            { props.users.map(u => {
                    return (
                        <div  className = {s.userContainer}>
                            <div className = {s.avatarBlock}>
                                <div>
                                    <img className={s.avatarPhoto} src={u.photos.small != 0 ? userPhoto : u.photos.small} alt="" />
                                </div>
                                <div>
                                    {u.followed 
                                    ? <button onClick ={() =>{ props.unfollow(u.id) }} className={s.followButton}>Удалить</button>
                                    :   <button onClick ={() =>{ props.follow(u.id) }} className={s.followButton}>Добавить</button>}
                                   
                                </div>
                            </div>
                            <div className ={s.infoBlock}>
                                <h2>{u.name}</h2>
                                <div>
                                    <h4>{`Статус: ${u.status} `}</h4>
                                </div>
                                <div className={s.locationInfo}>
                                    <div>
                                      <p>Cтрана: {'u.location.country'}</p>
                                      <p>Город: {'u.location.city'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;



 // if(props.users.length === 0){
    //     props.setUser(
    //     [
    //             {id: 1, photo: 'https://tlgrm.ru/_/stickers/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/1.jpg',
    //                 followed: true, fullname: 'Сергей М.', status: 'Начальник соц-сети!', location: { country: 'Россия', city: 'Пятигорск' } },
    //             {id: 2, photo: 'https://tlgrm.ru/_/stickers/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/1.jpg',
    //                 followed: false, fullname: 'Валентин В.', status: 'Помогаю в разработке..', location: { country: 'Россия', city: 'Калининград' }},
    //             {id: 3, photo: 'https://tlgrm.ru/_/stickers/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/1.jpg',
    //                 followed: false, fullname: 'Андрей М.', status: 'Мент по жизни!', location: { country: 'Россия', city: 'Пятигорск' }},
    //             {id: 4, photo: 'https://tlgrm.ru/_/stickers/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/1.jpg',
    //                 followed: true, fullname: 'Ашот М.', status: 'Соц-работник!', location: { country: 'Россия', city: 'Пятигорск' }},]
    //     )
    // }