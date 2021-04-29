import React from 'react';
import { Route } from 'react-router';
import '../src/App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <NavbarContainer/>
      <div className='app-wrapper-content'>
        <Route path='/Dialogs' render={() => <DialogsContainer />} />
        <Route path='/Profile' render={() => <Profile />} />
        <Route path='/Users' render={() => <UsersContainer /> }/>
      </div>
    </div>
  )
};

export default App;
