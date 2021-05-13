import React from 'react';
import Preloader from '../../Common/preloader/Preloader';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.info__div}>
      <div className={s.avatar}>
        <img src={props.profile.photos.large == null ? userPhoto : props.profile.photos.large} />
      </div>
      <div className={s.user__info}>
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