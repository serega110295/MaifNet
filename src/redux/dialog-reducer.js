let NEW_MESSAGE = 'NEW-MESSAGE'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const DialogReducer = (state, action) => {

    switch (action.type) {

        case NEW_MESSAGE:
            let message = { 'id': 4, 'messege': state.newMessageText }
            state.messagesData.push(message)
            state.newMessageText = ''
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText
            return state;

        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return {
        type: NEW_MESSAGE
    }
}
export const updateNewMessageACreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, messageText: text
    }
}



export default DialogReducer;

