let NEW_MESSAGE = 'NEW-MESSAGE'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let initialState = {

    newMessageText: '',

    dialogData: [
      { 'id': 1, 'name': 'Валентин', },
      { 'id': 2, 'name': 'Аедрей', },
      { 'id': 3, 'name': 'Ашот', },
      { 'id': 4, 'name': 'Станислав', },
      { 'id': 5, 'name': 'Янис', },
    ],
    messagesData: [
      { 'id': 1, 'messege': 'Привет, как ты??' },
      { 'id': 2, 'messege': 'Пойдет, ты как брат??' },
      { 'id': 3, 'messege': 'Нормально! Спасибо' },
    ],
  }

const DialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case NEW_MESSAGE:
                return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, { 'id': 4, 'messege': state.newMessageText }]
            }
         
        case UPDATE_NEW_MESSAGE_TEXT: 
            return{
                ...state,
                newMessageText: action.messageText
            }
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

