import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followAC, setCurentPage, setUsers, unFollowAC, setUserTotalCountAC } from '../../redux/users-reducer';
import Users from './Users'


class UsersContainers extends React.Component {

    componentDidMount() {
      
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentUser}&count=${this.props.sizePage}`,
                { headers: { "API-KEY": 'a47def70-2b24-4389-b27d-2a1be15443f3' } }).then(response => {
                    this.props.setUser(response.data.items)
                })
        }

    };

    setPage = (pageNumber) => {
        
       this.props.setCurentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.sizePage}`,
      { headers: { "API-KEY": 'a47def70-2b24-4389-b27d-2a1be15443f3' } }).then(response => {
          this.props.setUser(response.data.items)
         //this.props.setUserTotalCount(response.data.totalCount)

      })
    }

    render() {
        
        return (
            < Users  totalUserCount = {this.props.totalUserCount}
            sizePage = {this.props.sizePage}
            curentUser = {this.props.curentUser}
            users = {this.props.users}
            unfollow = {this.props.unfollow}
            follow = { this.props.follow}
             setPage = {this.setPage}/>
        )
    }


}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        sizePage: state.usersPage.sizePage,
        totalUserCount: state.usersPage.totalUserCount,
        curentUser: state.usersPage.curentUser,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUser: (user) => {
            dispatch(setUsers(user))
        },
        setCurentPage: (pageNumber) => {
            dispatch(setCurentPage(pageNumber))
        },
        setUserTotalCount: (totalCount) => {
            dispatch(setUserTotalCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainers);

