import React from 'react';
import { Route } from 'react-router';
import '../src/App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = (props) => {
  debugger
  
  
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar sidebar={props.state.sidebar} />
      <div className='app-wrapper-content'>
        <Route path='/Dialogs'
          render={() => <DialogsContainer
            store = {props.store}
          />} />
        <Route path='/Profile'
          render={() => <Profile
            store = {props.store}
          />} />


      </div>
    </div>
  )
};


// state={props.state.profilePage} dispatch={props.dispatch}
// state={props.state.dialogsPage} dispatch={props.dispatch}




export default App;
