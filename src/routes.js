import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { firebase } from "./config/firebase/";

import NavBar from "./components/nav-bar/";
import Login from "./module/login/views/index";
import Home from "./module/home/views/home";
import Registro from "./module/login/views/registrar";
import Perfil from "./module/perfil/views";
import PrivateRoute from "./private-route";

class Routes extends React.Component {
  state = {
    loading: true,
    authenticated: false,
    user: null
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;
    if (loading) {
      return <p>Loading..</p>;
    }
    return (
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
        </div>
        <div>
          <NavBar />
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            exact
            path="/profile"
            authenticated={authenticated}
            component={Perfil}
          />
          <Route exact path="/registrar" component={Registro} />
        </div>
      </Router>
    );
  }
}

export default Routes;
