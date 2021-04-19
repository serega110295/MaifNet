let store = {
  getState(){
    return this._state
  },
  _state : {

    profilePage: {
  
      newPostText: '',
      postData: [
        { id: 1, message: "Hi World", like: 10 },
        { id: 2, message: "Its my first post", like: 22 }
      ],
  
    },
  
    dialogsPage: {
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
  _callbackSubscriber(){
    console.log('State changed')
  },

  addPost (newPost) {
    let post = {
      id: 5,
      message: newPost,
      like: 0
    }
    this._state.profilePage.postData.push(post)
    this._state.profilePage.newPostText = ''
    this._callbackSubscriber(this._state)
  },

  updatePostText(text){
    this._state.profilePage.newPostText = (text)
    this._callbackSubscriber(this._state)
  },

  obscribe (observer) {
    this._callbackSubscriber = observer
  }

}


export default store;