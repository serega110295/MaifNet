import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'
import StoreContext from './contextStore';



let rerender = (state) => {
      ReactDOM.render(
            <BrowserRouter>
                  
                        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            
            </BrowserRouter>
            , document.getElementById('root')
      );
}



rerender(store.getState())

store.subscribe(() => {
      let state = store.getState()
      rerender(state)
})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* postData={state.profilePage.postData}
      dialogData={state.dialogsPage.dialogData}
      messagesData={state.dialogsPage.messagesData} */