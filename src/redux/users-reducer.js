let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        {id:1, photo: 'http://pristor.ru/wp-content/uploads/2018/05/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%A1%D0%B8%D0%BC%D0%BF%D1%81%D0%BE%D0%BD%D1%8B-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-2018-7.jpg',
         follow: true, fullname: 'Сергей М.', status: 'Начальник соц-сети!', location: {country:'Россия', city: 'Пятигорск'}},
        {id:2, photo: 'http://pristor.ru/wp-content/uploads/2018/05/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%A1%D0%B8%D0%BC%D0%BF%D1%81%D0%BE%D0%BD%D1%8B-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-2018-7.jpg' ,
        follow: false, fullname: 'Валентин В.', status: 'Помогаю в разработке..', location: {country:'Россия', city: 'Калининград'}},
        {id:3, photo: 'http://pristor.ru/wp-content/uploads/2018/05/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%A1%D0%B8%D0%BC%D0%BF%D1%81%D0%BE%D0%BD%D1%8B-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-2018-7.jpg' ,
         follow: false, fullname: 'Андрей М.', status: 'Мент по жизни!', location: {country:'Россия', city: 'Пятигорск'}},
        {id:4, photo: 'http://pristor.ru/wp-content/uploads/2018/05/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%A1%D0%B8%D0%BC%D0%BF%D1%81%D0%BE%D0%BD%D1%8B-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-2018-7.jpg' , 
        follow: true, fullname: 'Ашот М.', status: 'Соц-работник!', location: {country:'Россия', city: 'Пятигорск'}},
]
};


const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
case FOLLOW:
   return {
       ...state,
        users: state.users.map( u =>{
            if(u.id === action.userID){
                return {...u, follow: true}
            }
            return u;
        })
    }

case UNFOLLOW:
    return {
        ...state,
         users: state.users.map( u =>{
             if(u.id === action.userID){
                 return {...u, follow: false}
             }
             return u;
         })
     }
     case SET_USERS:
         return {
             ...state, user: [...state.users, action.user]
         }
        default:
            return state
    }

}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unFollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (user) => ({type: SET_USERS, user})


export default UsersReducer;