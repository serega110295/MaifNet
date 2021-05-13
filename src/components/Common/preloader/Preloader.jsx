import React from 'react'
import s from './Preloader.module.css'
import preLoader from '../../../assets/images/preloader.png'

const Preloader = (props) =>{
    return (
        <div className = {s.preloader}>
            <img  src= {preLoader}/>
        </div>
    )
}

export default Preloader;