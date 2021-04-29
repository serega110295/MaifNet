let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURENT_PAGE = 'SET-CURENT-PAGE';
let TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'


let initialState = {
    users: [],
    sizePage: 5,
    totalUserCount: 20,
    curentUser: 1,
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true };
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.user
            }

        case SET_CURENT_PAGE:
            return {
                ...state, curentUser: action.curentUser
            }
        case TOTAL_USERS_COUNT:
            return{
                ...state, totalUserCount: action.totalUserCount
            }    
        default:
            return state
    }

}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (user) => ({ type: SET_USERS, user })
export const setCurentPage = (pageNumber) => ({type: SET_CURENT_PAGE, curentUser: pageNumber})
export const setUserTotalCountAC = (totalCount) => ({type: TOTAL_USERS_COUNT, totalUserCount: totalCount})

export default UsersReducer;