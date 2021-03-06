import React from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => history.push("/account")} fill="clear">
          Start
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
