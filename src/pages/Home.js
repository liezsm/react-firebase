import React, { useState, useEffect } from "react";

// firebase get data
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

const Home = ({ isAuth }) => {
  const [datas, setData] = useState([]);

  // params: (dbconfig, name of table)
  const postsCollectionRef = collection(db, "posts");

  // exp delete doc
  // exp enable/show the del btn if the post author id is equal to the login id(the one who logged in meaning , the owner)

  const deletePost = async (id) => {
    // the item you wanna delete
    // exp doc params( database from config, table name ex posts, id of the item wana delete)
    const item = doc(db, "posts", id);
    await deleteDoc(item);
    getPost();
  };

  // fetching the data function
  const getPost = async () => {
    const data = await getDocs(postsCollectionRef);
    setData(data.docs.map((item) => ({ ...item.data(), id: item.id })));
  };
  // fetch the data from database firebase
  useEffect(() => {
    getPost();
  }, []);

  const title = datas.map((item) => (
    <div className='post' key={item.id}>
      <h1>{item.title}</h1>
      <div className='post_text'>{item.post}</div>
      <h3>@{item.author.name}</h3>

      {auth.currentUser && isAuth && item.author.id == auth.currentUser.uid && (
        <button className='delete-btn' onClick={() => deletePost(item.id)}>
          {" "}
          &#128465;
        </button>
      )}
    </div>
  ));

  console.log(datas);
  return (
    <div className='homePage'>
      <p> Homepage </p>
      {title}
    </div>
  );
};

export default Home;
