import React from 'react';
import { Route } from 'react-router';
import '../src/App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import LoginContainer from './components/Header/LoginContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (

    <div className='app-wrapper'>
      <LoginContainer />
      <NavbarContainer/>
      <div className='app-wrapper-content'>
        <Route path='/Dialogs' render={() => <DialogsContainer />} />
        <Route path='/Profile/:userid?' render={() => <ProfileContainer />} />
        <Route path='/Users' render={() => <UsersContainer /> }/>
      </div>
    </div>
  )
};

export default App;
