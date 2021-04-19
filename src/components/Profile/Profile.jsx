import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
 

  return (
    <div>
      <ProfileInfo />
      <MyPosts postData = {props.state.postData} addPost = {props.addPost} newPostText = {props.state.newPostText} updatePostText = {props.updatePostText} />
    </div>
  )
}



export default Profile;