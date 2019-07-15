import * as React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

import { firebase } from './config/firebase';

import Loading from './components/loading/';

//import das classes(telas)
import NavBar from './components/nav-bar';
import Login from './module/login/views/index';
import Registro from './module/login/views/registrar';
import Perfil from './module/perfil/views';
import PrivateRoute from './private-route';
import Requisicao from './module/requisição/views';
import Requisicoes from './module/requisição/views/lista-requisicao';
import RequisicaoDetails from './module/requisição/views/requisicao-details';
import IncluirAdm from './module/incluir/views/index-adm';
import IncluirOng from './module/incluir/views/index-ong';
import IncluirUser from './module/incluir/views/index-user';
import Usuarios from './module/user/views/lista-user';
import ListaCesta from './module/estoque-cesta/views/lista-cesta';

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
          loading: false,
          authenticated: true
        });
        this.props.history.push('/perfil');
      } else {
        this.setState({
          loading: false,
          authenticated: false
        });
        this.props.history.push('/');
      }
    });
  }
  render() {
    const { loading, authenticated } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <NavBar />
        <PrivateRoute
          authenticated={authenticated}
          exact
          path="/perfil"
          component={Perfil}
        />
        <PrivateRoute
          authenticated={authenticated}
          exact
          path="/nova-requisicao"
          component={Requisicao}
        />
        <PrivateRoute
          authenticated={authenticated}
          exact
          path="/requisicoes"
          component={Requisicoes}
        />
        <PrivateRoute
          authenticated={authenticated}
          exact
          path="/requisicoes/:sid"
          component={RequisicaoDetails}
        />
        <PrivateRoute
          exact
          path="/novo-admin"
          authenticated={authenticated}
          component={IncluirAdm}
        />
        <PrivateRoute
          exact
          authenticated={authenticated}
          path="/nova-ong"
          component={IncluirOng}
        />
        <PrivateRoute
          authenticated={authenticated}
          exact
          path="/novo-user"
          component={IncluirUser}
        />
        <PrivateRoute
          authenticated={authenticated}
          exact
          path="/lista-usuarios"
          component={Usuarios}
        />
        <PrivateRoute
          authenticated={authenticated}
          exact
          path="/estoque-cesta"
          component={ListaCesta}
        />
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
