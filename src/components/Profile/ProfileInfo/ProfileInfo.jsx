import React from 'react';
import Preloader from '../../Common/preloader/Preloader';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
  return (
    <div className = {s.info__div}>
      <div className = {s.avatar}>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <div className = {s.user__info}>
        <div>
        <h1>{props.profile.fullName}</h1>
        </div>
        <div>
          <h4>Статус: {props.profile.aboutMe}</h4>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;