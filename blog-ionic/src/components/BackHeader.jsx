import React from 'react';
import {IonHeader, IonToolbar, IonBackButton, IonButtons} from '@ionic/react';

export default () => (
    <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton />
      </IonButtons>
    </IonToolbar>
  </IonHeader>
)