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
const Account = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton
          onClick={() => history.push("/account/setting")}
          fill="clear"
        >
          Start
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Account;
