import * as React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import { firebase } from "./config/firebase";

import Loading from "./components/loading/";

//import das classes(telas)
import NavBar from "./components/nav-bar";
import Login from "./module/login/views/index";
import Registro from "./module/login/views/registrar";
import Perfil from "./module/perfil/views";
import PrivateRoute from "./private-route";
import Requisicao from "./module/requisição/views";
import Requisicoes from "./module/requisição/views/lista-requisicao";
import RequisicaoDetails from "./module/requisição/views/requisicao-details";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    //define as variaveis de estado
    this.state = {
      loading: true,
      authenticated: false,
      user: null
    };
  }

  componentWillMount() {
    //verifica se o usuario esta logado
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loading: false
        });
        this.props.history.push("/perfil");
      } else {
        this.setState({
          loading: false
        });
        this.props.history.push("/");
      }
    });
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <NavBar />
        <PrivateRoute exact path="/perfil" component={Perfil} />
        <PrivateRoute exact path="/nova-requisicao" component={Requisicao} />
        <PrivateRoute exact path="/requisicoes" component={Requisicoes} />
        <PrivateRoute exact path="/teste" component={RequisicaoDetails} />
        <Route exact path="/" component={Login} />
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
