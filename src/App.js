import React from 'react';
import { Route } from 'react-router';
import '../src/App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


const App = (props) => {




  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar  sidebar = {props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route path='/Dialogs'
            render={() => <Dialogs state={props.state.dialogsPage} dispatch = {props.dispatch}/>} />

          <Route path='/Profile'
            render={() => <Profile state={props.state.profilePage} dispatch = {props.dispatch}
            />} />


        </div>
      </div>
  )
};





export default App;
