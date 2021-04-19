import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import DialogsHeader from './DialogsHeader/DialogsHeader';
import Messege from './Messeges/Messeges';
import SendMessages from './Messeges/SendMessages/SendMessages';


const Dialogs = (props) => {

    let dialogElement = props.state.dialogData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messegeElement = props.state.messagesData.map(m => <Messege messege={m.messege} />);


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
                        <SendMessages />
                    </div>

                </div>

            </div>
        </div>

    )
}


export default Dialogs;