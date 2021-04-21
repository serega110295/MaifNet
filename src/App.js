import React from 'react';
import { Route } from 'react-router';
import '../src/App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import StoreContext from './contextStore';


const App = (props) => {
  
  
  
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar sidebar = {props.state.sidebar} />
      <div className='app-wrapper-content'>
        <StoreContext.Provider value = {props.store}>
        <Route path='/Dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/Profile'
          render={() => <Profile />} />
          </StoreContext.Provider>


      </div>
    </div>
  )
};


// state={props.state.profilePage} dispatch={props.dispatch}
// state={props.state.dialogsPage} dispatch={props.dispatch}




export default App;
