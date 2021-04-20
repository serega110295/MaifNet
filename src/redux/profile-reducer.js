let ADD_POST = 'ADD-POST';
let NEW_POST_TEXT = 'NEW-POST-TEXT';

const ProfileReducer = (state, action) => {

    switch (action.type) {

        case ADD_POST:
            let post = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            state.postData.push(post)
            state.newPostText = ''
            return state;

        case NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;

        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateActionCreator = (text) => {
    return { type: NEW_POST_TEXT, newText: text }
}


export default ProfileReducer;