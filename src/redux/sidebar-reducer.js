let initialState = {
    navdata: [
      { 'url': '/Profile', 'name': 'Профиль' },
      { 'url': '/Dialogs', 'name': 'Сообщения' },
      { 'url': '/News', 'name': 'Новости' },
      { 'url': '/Users', 'name': 'Пользователи' },
      { 'url': '/Music', 'name': 'Музыка' },
    ]
  }

const SideBarReducer = (state = initialState , action) => {



    return state;
}


export default SideBarReducer;