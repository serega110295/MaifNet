let ADD_POST = 'ADD-POST';
let NEW_POST_TEXT = 'NEW-POST-TEXT';

let initialState = {

    newPostText: '',
    postData: [
      { id: 1, message: "Hi World", like: 10 },
      { id: 2, message: "Its my first post", like: 22 }
    ],

  }

const ProfileReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ADD_POST: 
                return {
                ...state,
                newPostText:'',
                postData: [...state.postData, {id: 5, message: state.newPostText, like: 0 }],
                
            }

        case NEW_POST_TEXT: 
        return{
            ...state,
            newPostText: action.newPostText,
        }

        default:
            return state}
    }




export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateActionCreator = (text) => {
    return { type: NEW_POST_TEXT, newPostText: text }
}


export default ProfileReducer;