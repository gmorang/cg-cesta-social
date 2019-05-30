import * as React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import { firebase } from "./config/firebase";

import Loading from "./components/loading/";

import NavBar from "./components/nav-bar";
import Login from "./module/login/views/index";
import Registro from "./module/login/views/registrar";
import Perfil from "./module/perfil/views";
import PrivateRoute from "./private-route";
import Requisicao from "./module/requisição/views";

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

        <PrivateRoute
          exact
          path="/nova-requisicao"
          authenticated={authenticated}
          component={Requisicao}
        />
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
