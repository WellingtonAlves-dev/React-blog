import React, { useEffect, useState } from "react";
import { IonPage, IonContent, IonImg, IonText } from "@ionic/react";
import Header from "../components/BackHeader";
import axios from "axios";
export default (props) => {
  // Hooks
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${props.match.params.id}`)
      .then((res) => setPost(res.data));
  }, []);
  // Js
  // JSX
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonImg src={post.capa} />
        <IonText color='dark'>
          <h1>{post.title}</h1>
        </IonText>
        <IonText color='medium'>
          <h6>{post.author}</h6>
        </IonText>
        <IonText color='dark'>
          <p>
            {post.desc}
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};
