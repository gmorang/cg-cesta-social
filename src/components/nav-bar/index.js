import React from 'react';

import AppBar from './app-bar';
import DrawerMenu from './drawer-menu/index';
import AdminMenu from './drawer-menu/admin-menu';
import OngMenu from './drawer-menu/ong-menu';
import actions from '../../actions';
import Loading from '../loading';
import { firebase } from '../../config/firebase/';

class NavBar extends React.Component {
  state = {
    isOpen: false,
    user: null,
    loadedUser: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.fetchUserType();
      }
      return null;
    });
  }
  render() {
    const { isOpen, user } = this.state;

    const wrapperStyles = {
      zIndex: 99997,
      position: 'relative'
    };

    return (
      <div style={wrapperStyles}>
        <AppBar toggleDrawer={this.toggleDrawer} {...this.props} />
        {this.renderDrawer()}
      </div>
    );
  }

  renderDrawer() {
    let { loadedUser, isOpen } = this.state;

    if (loadedUser === null) {
      return (
        <DrawerMenu
          isOpen={isOpen}
          toggleDrawer={this.toggleDrawer}
          {...this.props}
        />
      );
    }
    switch (loadedUser.tipo) {
      case 'usuario':
        return (
          <DrawerMenu
            isOpen={isOpen}
            toggleDrawer={this.toggleDrawer}
            {...this.props}
          />
        );
      case 'admin':
        return (
          <AdminMenu
            isOpen={isOpen}
            toggleDrawer={this.toggleDrawer}
            {...this.props}
          />
        );

      case 'ong':
        return (
          <OngMenu
            isOpen={isOpen}
            toggleDrawer={this.toggleDrawer}
            {...this.props}
          />
        );
    }
  }

  fetchUserType() {
    actions.user.infoUser().then(user => {
      console.log(user);
      this.setState({ loadedUser: user });
    });
  }

  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

export default NavBar;
