import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = (props) => {
  
  let postElement = props.postData.map(p => <Post message={p.message} like={p.like} />);
  

  let addNewPost = React.createRef()

  let newPost = () => {
    props.addPost()

  }

  let onPostChange = () => {
    let text = addNewPost.current.value
    props.updateNewPost(text)

  }

  return (
    <div className={s.postsBlock}>
      <h3>Мои посты:</h3>
      <div>
        <div>
          <textarea ref={addNewPost} n onChange={onPostChange} value={props.newPostText} cols="30" rows="3" placeholder ='Напиши что нибудь...' />
        </div>
        <div>
          <button onClick={newPost}>Поделиться</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>
  )
}

export default MyPosts;