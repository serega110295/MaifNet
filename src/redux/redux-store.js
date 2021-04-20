import { combineReducers, createStore } from "redux";
import DialogReducer from "./dialog-reducer";
import ProfileReducer from "./profile-reducer";
import SideBarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    sidebar: SideBarReducer
})



let store = createStore(reducers)


export default store;