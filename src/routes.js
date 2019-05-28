import * as React from "react";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";

import { firebase } from "./config/firebase";

import Loading from "./components/loading/";

import NavBar from "./components/nav-bar";
import Login from "./module/login/views/index";
import Home from "./module/home/views/home";
import Registro from "./module/login/views/registrar";
import Perfil from "./module/perfil/views";
import PrivateRoute from "./private-route";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
      user: null
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
        this.props.history.push("/profile");
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
        this.props.history.push("/");
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={Login} />
        <PrivateRoute
          exact
          path="/profile"
          authenticated={authenticated}
          component={Perfil}
        />
        <Route exact path="/registrar" component={Registro} />
      </React.Fragment>
    );
  }
}

const AppWithRoutes = withRouter(Routes);

const Wrapper = () => (
  <BrowserRouter>
    <AppWithRoutes />
  </BrowserRouter>
);

export default Wrapper;
