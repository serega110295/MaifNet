import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

const Users = (props) =>{
    
    let pageCount = Math.ceil(props.totalUserCount / props.sizePage);

        let page = []

        for (let i = 1; i <= pageCount; i++) {
            page.push(i)
        }

    return(
        <div>
                <div>
                    {page.map(p => {
                        return <span onClick= {(e) => {props.setPage(p)}} className={props.curentUser === p && s.countPage}>{p} </span>
                    })}
                </div>
                { props.users.map(u => {
                    return (
                        <div className={s.userContainer}>

                            <div className={s.avatarBlock}>
                                <div>
                               <NavLink to ={'/Profile/'+ u.id }>
                               <img className={s.avatarPhoto} src={u.photos.small !== 0 ? userPhoto : u.photos.small} alt="" />
                               </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }} className={s.followButtonDelete}>Удалить</button>
                                        : <button onClick={() => { props.follow(u.id) }} className={s.followButton}>Добавить</button>}

                                </div>
                            </div>
                            <div className={s.infoBlock}>
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
};

export default Users;