import React, { useState, useEffect } from "react";

// firebase get data
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const Home = () => {
  const [data, setDate] = useState();

  // params: (dbconfig, name of table)
  const postsCollectionRef = collection(db, "posts");

  // fetch the data from database firebase
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      console.log(data.docs.map((item) => ({ ...item.doc, id: item.id })));
    };

    getPost();
  }, []);
  return <div className='homePage'>homepage</div>;
};

export default Home;
