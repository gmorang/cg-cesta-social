import React from 'react';

import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProfileIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Clear';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Group from '@material-ui/icons/Group';
import Dashboard from '@material-ui/icons/Dashboard';
import { firebase } from '../../../config/firebase/';

import './index.css';

const Item = ({ icon, text, ...rest }) => {
  return (
    <ListItem button {...rest}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText secondary={text} />
    </ListItem>
  );
};

class AdminMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }
  render() {
    const user = this.state.user;
    const { isOpen, toggleDrawer } = this.props;

    return (
      <div>
        <div className={isOpen ? 'drawer open' : 'drawer'}>
          <Toolbar
            style={{
              backgroundColor: '#000',
              height: '64px',
              cursor: 'pointer',
              justifyContent: 'flex-end'
            }}
            onClick={toggleDrawer}
          >
            <IconButton
              style={{
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, .05)'
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <List>
            {user != null ? (
              <React.Fragment>
                <Item
                  icon={<Dashboard />}
                  text="Dashboard"
                  component={Link}
                  to="/dashboard"
                  onClick={toggleDrawer}
                />
                <Item
                  icon={<ProfileIcon />}
                  text="Peril do Usuário"
                  component={Link}
                  to="/perfil"
                  onClick={toggleDrawer}
                />
                <Item
                  icon={<PersonAdd />}
                  text="Adicionar Admin"
                  component={Link}
                  to="/novo-admin"
                  onClick={toggleDrawer}
                />
                <Item
                  icon={<PersonAdd />}
                  text="Adicionar ONG"
                  component={Link}
                  to="/nova-ong"
                  onClick={toggleDrawer}
                />
                <Item
                  icon={<Group />}
                  text="Usuários"
                  component={Link}
                  to="/lista-usuarios"
                  onClick={toggleDrawer}
                />
                <Item
                  icon={<LibraryBooks />}
                  text="Requisições"
                  component={Link}
                  to="/requisicao-admin"
                  onClick={toggleDrawer}
                  divider
                />
                <Item
                  icon={<LogoutIcon />}
                  onClick={this._handleLogOut}
                  text="Sair"
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Item
                  icon={<ProfileIcon />}
                  text="Login"
                  component={Link}
                  to="/"
                  onClick={toggleDrawer}
                />
                <Item
                  icon={<PersonAdd />}
                  text="Cadastre-se"
                  component={Link}
                  to="/registrar"
                  onClick={toggleDrawer}
                />
              </React.Fragment>
            )}
          </List>
        </div>
        <div className="overlay" />
      </div>
    );
  }

  _handleLogOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        alert('Você saiu!');
      })
      .catch(error => {
        // An error happened
        console.log(error);
      });
  }
}

export default AdminMenu;
