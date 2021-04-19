import React from 'react';
import s from './../Dialogs.module.css'


const Messege = (props) => {
    return (
        < div className={s.messege}>
           <div>
           {props.messege}
           </div>
        </div>
        
    )
}

export default Messege;