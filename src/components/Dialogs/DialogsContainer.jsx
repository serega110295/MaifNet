import React from 'react';
import StoreContext from '../../contextStore';
import { addMessageActionCreator, updateNewMessageACreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    debugger


    return (
        <StoreContext.Consumer>
          { (store)=>  {
                let state = store.getState()

                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let updateMessageText = (text) => {
                    store.dispatch(updateNewMessageACreator(text))
                }

                return <Dialogs onSendMessage={sendMessage} updateNewMessage={updateMessageText}
                    dialogData={state.dialogsPage.dialogData} messagesData={state.dialogsPage.messagesData} newMessageText={state.dialogsPage.newMessageText}
                />
            }

            }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;