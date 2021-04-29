import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsers, unFollowAC } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

