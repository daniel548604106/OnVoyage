import "./App.css";
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
function App() {
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
