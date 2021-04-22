import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageACreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';



let mapStateToProps = (state) =>{
    return{
        dialogData: state.dialogsPage.dialogData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        onSendMessage: () =>{
            dispatch(addMessageActionCreator())
        },
        updateNewMessage: (text) =>{
            dispatch(updateNewMessageACreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;