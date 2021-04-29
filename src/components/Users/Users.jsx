import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        
       if (this.props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUser(response.data.items)
       })
        }

    }

    render() {
        return (
            <div>
                { this.props.users.map(u => {
                    return (
                        <div className={s.userContainer}>
                            <div className={s.avatarBlock}>
                                <div>
                                    <img className={s.avatarPhoto} src={u.photos.small != 0 ? userPhoto : u.photos.small} alt="" />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { this.props.unfollow(u.id) }} className={s.followButtonDelete}>Удалить</button>
                                        : <button onClick={() => { this.props.follow(u.id) }} className={s.followButton}>Добавить</button>}

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
    }


}
export default Users;