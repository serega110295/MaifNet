import DialogReducer from "./dialog-reducer";
import ProfileReducer from "./profile-reducer";
import SideBarReducer from "./sidebar-reducer";


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
  _callSubscriber() {
    console.log('State changed')
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },


  dispatch(action) {

    this._state.profilePage = ProfileReducer(this._state.profilePage, action)
    this._state.dialogsPage = DialogReducer(this._state.dialogsPage, action)
    this._state.sidebar = SideBarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}



export default store;