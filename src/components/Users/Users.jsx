import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div className = {s.userContainer}>
                            <div className = {s.avatarBlock}>
                                <div>
                                    <img className = {s.avatarPhoto} src={u.photo} alt=""/>
                                </div>
                                <div>
                                    <button className={s.followButton}>Добавить</button>
                                </div>
                            </div>
                            <div className ={s.infoBlock}>
                                <h2>{u.fullname}</h2>
                                <div>
                                    <h4>{`Статус: ${u.status} `}</h4>
                                </div>
                                <div className={s.locationInfo}>
                                    <div>
                                      <p>Cтрана: {u.location.country}</p>
                                      <p>Город: {u.location.city}</p>
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