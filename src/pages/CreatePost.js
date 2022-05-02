import React, { useState, useEffect } from "react";

// routing
import { useNavigate } from "react-router-dom";

// exp import function from firebase
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const CreatePost = ({ isAuth }) => {
  let navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    post: "",
  });

  function handleChange(e) {
    const { name, value, type } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  // params: (dbconfig, name of table)
  const postsCollectionRef = collection(db, "posts");

  // create a function to store the date into firebase

  const createPost = async () => {
    // exp addDoc takes in 2 params(reference to which tableyou want to add,) so we need to add the collection to be referred first outside,2nd param is the data wanna add ex. post
    await addDoc(postsCollectionRef, {
      ...post,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    // redirect to homepage after successfully added to firebase
    navigate("/");
  };

  // exp to prevent users from inserting link in the url directly to create post , we have to check if they are already loggedin , if not redirect to home

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
      return;
    }
  }, []);

  console.log(isAuth);
  return (
    <div className='createPostPage'>
      <div className='cp-container'>
        <h1>Create a Post</h1>
        <div className='inputfield'>
          <label> Title: </label>
          <input
            type='text'
            name='title'
            value={post.title}
            onChange={(e) => handleChange(e)}
            placeholder='Title...'
          />
        </div>
        <div className='inputfield'>
          <label> Post: </label>
          <textarea
            name='post'
            placeholder='Add post..'
            value={post.post}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type='submit' onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
