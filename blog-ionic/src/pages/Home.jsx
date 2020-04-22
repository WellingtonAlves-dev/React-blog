import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Card from "../components/Card";
import Header from '../components/Header';
const Home = () => {
  //hooks
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);
  // js

  // jsx
  return (
    <IonPage>
      <Header/>
      <IonContent>
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              titulo={post.title}
              capa={post.capa}
              content={post.desc}
              autor={post.author}
              id={post.id}
            />
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Home;
