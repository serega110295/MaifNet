let ADD_POST = 'ADD-POST';
let NEW_POST_TEXT = 'NEW-POST-TEXT';

let NEW_MESSAGE = 'NEW-MESSAGE'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
  getState() {
    return this._state
  },
  _state: {

    profilePage: {

      newPostText: '',
      postData: [
        { id: 1, message: "Hi World", like: 10 },
        { id: 2, message: "Its my first post", like: 22 }
      ],

    },

    dialogsPage: {

      newMessageText : '',

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
    },

    sidebar: {
      navdata: [
        { 'url': '/Profile', 'name': 'Профиль' },
        { 'url': '/Dialogs', 'name': 'Сообщения' },
        { 'url': '/News', 'name': 'Новости' },
        { 'url': '/Music', 'name': 'Музыка' },
      ]
    },


  },
  _callbackSubscriber() {
    console.log('State changed')
  },

  obscribe(observer) {
    this._callbackSubscriber = observer
  },


  dispatch(action) {
    if (action.type === ADD_POST) {
      let post = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0
      }
      this._state.profilePage.postData.push(post)
      this._state.profilePage.newPostText = ''
      this._callbackSubscriber(this._state)
    }
    else if (action.type === NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callbackSubscriber(this._state)
    }
    else if (action.type === NEW_MESSAGE){
      let message = {'id': 4, 'messege': this._state.dialogsPage.newMessageText}
      this._state.dialogsPage.messagesData.push(message)
      this._state.dialogsPage.newMessageText = ''
      this._callbackSubscriber(this._state)
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.messageText
      this._callbackSubscriber(this._state)
    }
  },


}



export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateActionCreator = (text) => {
  return { type: NEW_POST_TEXT, newText: text }
}



export const addMessageActionCreator = () =>{
  return {
    type: NEW_MESSAGE
  }
}
export const updateNewMessageACreator = (text) => {
  return{
    type: UPDATE_NEW_MESSAGE_TEXT, messageText: text }
}


export default store;