import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonRippleEffect
} from "@ionic/react";

export default (props) => {
  return (
    <IonCard className={"ion-activatable"} routerLink={`/materia/${props.id}`}>
      <IonCardHeader>
        <IonCardSubtitle>{props.autor}</IonCardSubtitle>
        <IonCardTitle>{props.titulo}</IonCardTitle>
        <IonImg src={props.capa} />
      </IonCardHeader>
      <IonCardContent>{props.content.substr(0, 20) + "..."}</IonCardContent>
      <IonRippleEffect/>
    </IonCard>
  );
};
