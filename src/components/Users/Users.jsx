import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
      
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentUser}&count=${this.props.sizePage}`,
                { headers: { "API-KEY": 'a47def70-2b24-4389-b27d-2a1be15443f3' } }).then(response => {
                    this.props.setUser(response.data.items)
                })
        }

    };

    setPage = (pageNumber) => {
        debugger
       this.props.setCurentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.sizePage}`,
      { headers: { "API-KEY": 'a47def70-2b24-4389-b27d-2a1be15443f3' } }).then(response => {
          this.props.setUser(response.data.items)
          //this.props.setUserTotalCount(response.data.totalCount)
debugger
      })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUserCount / this.props.sizePage);

        let page = []

        for (let i = 1; i <= pageCount; i++) {
            page.push(i)
        }
        return (
            <div>
                <div>
                    {page.map(p => {
                        return <span onClick= {(e) => {this.setPage(p)}} className={this.props.curentUser === p && s.countPage}>{p} </span>
                    })}
                </div>
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