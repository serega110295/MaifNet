import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { obscribe } from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updatePostText } from './redux/state'


let rerender = () => {
      ReactDOM.render(
            <BrowserRouter>
                  <App state={state} addPost={addPost} updatePostText={updatePostText} />
            </BrowserRouter>
            , document.getElementById('root')
      );
}



rerender(state)

obscribe(rerender)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* postData={state.profilePage.postData}
      dialogData={state.dialogsPage.dialogData}
      messagesData={state.dialogsPage.messagesData} */