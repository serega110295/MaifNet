import React from 'react';
import StoreContext from '../../../contextStore';
import { addPostActionCreator, updateActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

  
  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState()
        let newPost = () => {
          store.dispatch(addPostActionCreator())
        }

        let onPostChange = (text) => {
          let action = updateActionCreator(text)
          store.dispatch(action)
        }

        return <MyPosts addPost={newPost} updateNewPost={onPostChange}
          newPostText={state.profilePage.newPostText} postData={state.profilePage.postData} />

      }

      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;