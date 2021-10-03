import "./App.css";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import {
  IonApp,
  IonLabel,
  IonTabs,
  IonContent,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import allRouters from "./routes";
import Home from "./pages/Home";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import { gql } from "@apollo/client";
import { useEffect } from "react";
import gqlClient from "./graphql/client.js";
function App() {
  const getUser = () => {
    gqlClient
      .query({
        query: gql`
          {
            user {
              id
              name
            }
          }
        `,
      })
      .then((res) => console.log(res.data));
  };

  const getTask = (id: Number) => {
    gqlClient
      .query({
        query: gql`
        {
          task(id: ${id}) {
            title
            description
            completed
          }
        }
      `,
      })
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    getUser();
    getTask(1);
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/" component={Home} exact />
              {allRouters.map(({ path, exact, component }) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    exact={exact}
                    component={component}
                  />
                );
              })}
              <Redirect exact from="/" to="/home" />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="search" href="/search">
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="account" href="/account">
                <IonLabel>Account</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
