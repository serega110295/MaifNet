import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurentPage, setUsers, unFollowAC, setUserTotalCountAC } from '../../redux/users-reducer';
import Users from './Users';


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

export default connect(mapStateToProps, mapDispatchToProps)(Users);

