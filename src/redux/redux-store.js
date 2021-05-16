import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import DialogReducer from "./dialog-reducer";
import ProfileReducer from "./profile-reducer";
import SideBarReducer from "./sidebar-reducer";
import UsersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    sidebar: SideBarReducer,
    usersPage: UsersReducer,
    authData: authReducer,
})




let store = createStore(reducers)

window.store = store


export default store;