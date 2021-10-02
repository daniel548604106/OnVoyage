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
          <IonTitle>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>asdaoisdjoaisjdoaisjdo</div>
        <IonButton onClick={() => history.push("/account")} fill="clear">
          Setting
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Account;
