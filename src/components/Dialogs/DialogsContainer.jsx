import React from 'react';
import {addMessageActionCreator, updateNewMessageACreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    debugger
    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())}
    
    let updateMessageText = (text) => {
        props.store.dispatch(updateNewMessageACreator(text))}
    
    return (
        <Dialogs onSendMessage = {sendMessage} updateNewMessage = {updateMessageText}
        dialogData = {state.dialogsPage.dialogData} messagesData = {state.dialogsPage.messagesData} newMessageText = {state.dialogsPage.newMessageText}
        />
    )
}


export default DialogsContainer;