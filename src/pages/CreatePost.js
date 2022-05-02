import React from "react";

const CreatePost = () => {
  return (
    <div className='createPostPage'>
      <div className='cp-container'>
        <h1>Create a Post</h1>
        <div className='inputfield'>
          <label> Title: </label>
          <input type='text' name='title' placeholder='Title...' />
        </div>
        <div className='inputfield'>
          <label> Post: </label>
          <textarea name='body' placeholder='Add post..' />
        </div>

        <button type='submit'>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
