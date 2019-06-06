import React from "react";
import { Route } from "react-router-dom";
import { firebase } from "./config/firebase/";
import Loading from "./components/loading";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        firebase.auth().currentUser.uid ? <Component {...props} /> : <Loading />
      }
    />
  );
}
