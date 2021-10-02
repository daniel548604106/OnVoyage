import "@ionic/react/css/core.css";
import "./index.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import allRouters from "./routes";
ReactDOM.hydrate(
  <React.StrictMode>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            {allRouters.map(({ path, exact, component }) => {
              return <Route path={path} exact={exact} component={component} />;
            })}
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
