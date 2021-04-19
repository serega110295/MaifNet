import React from 'react'
import s from './../../Dialogs.module.css'



const SendMessages = (props) => {
    return (
        <div>
            <div className={s.messageText}>
                <textarea rows="3"></textarea>
            </div>
            <div className={s.sendMessage}>
                <button>Отправить</button>
            </div>
        </div>
    )
}

export default SendMessages;




