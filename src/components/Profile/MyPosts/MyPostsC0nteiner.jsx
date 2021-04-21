import React from 'react';
import {addPostActionCreator, updateActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let state = props.store.getState()
  let newPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onPostChange = (text) => {
    let action = updateActionCreator(text)
    props.store.dispatch(action)
  }

  return (
    <MyPosts  addPost = {newPost} updateNewPost = {onPostChange}
     newPostText = {state.profilePage.newPostText} postData = {state.profilePage.postData}/> 
  )
}

export default MyPostsContainer;