import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = (props) => {

  let addNewPost = React.createRef()

  let newPost = () => {
    let text = addNewPost.current.value
    props.addPost(text)

  }

  let onPostChange = () => {
    let text = addNewPost.current.value
    props.updatePostText(text);

  }


  let postElement = props.postData.map(p => <Post message={p.message} like={p.like} />);

  return (
    <div className={s.postsBlock}>
      <h3>Мои посты:</h3>
      <div>
        <div>
          <textarea ref={addNewPost} n onChange={onPostChange} value={props.newPostText} cols="30" rows="3" />
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