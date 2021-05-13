import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import DialogsHeader from './DialogsHeader/DialogsHeader';
import Messege from './Messeges/Messeges';


const Dialogs = (props) => {

    let dialogElement = props.dialogData.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let messegeElement = props.messagesData.map(m => <Messege messege={m.messege} key={m.id} />);

    let newMess = React.createRef()

    let sendMessage = () => {
        props.onSendMessage()
    }

    let updateMessageText = () => {
     let text = newMess.current.value 
     props.updateNewMessage(text)
    }

    return (
        <div className={s.dialogs}>
            <DialogsHeader />
            <div className={s.dialogs_main}>
                <div className={s.dialog_item}>
                    {dialogElement}
                </div>
                <div className={s.messeges}>
                    {messegeElement}
                    <div className={s.SendMessagesBlock}>
                        <div className={s.messageText}>
                            <textarea placeholder = 'Введите сообщение...' value = {props.newMessageText} onChange = {updateMessageText} rows="3" ref ={newMess} />
                        </div>
                        <div className={s.sendMessage}>
                            <button onClick ={sendMessage}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;