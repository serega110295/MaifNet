let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS'


let initialState = {
    users: []
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
                ...state, users: [...state.users, ...action.user]
            }
        default:
            return state
    }

}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (user) => ({ type: SET_USERS, user })


export default UsersReducer;