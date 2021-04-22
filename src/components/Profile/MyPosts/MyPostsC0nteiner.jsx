import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
  return{
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
} 
let mapStateToDispatch = (dispatch) => {
  return{
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPost: (text) => {
      dispatch(updateActionCreator(text))
    }
  }
} 

const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch) (MyPosts)

export default MyPostsContainer;