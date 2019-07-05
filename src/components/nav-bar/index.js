import React from 'react';
import AppBar from './app-bar';
import DrawerMenu from './drawer-menu/index';
import AdminMenu from './drawer-menu/admin-menu';
import OngMenu from './drawer-menu/ong-menu';
import actions from '../../actions';
import Loading from '../loading';

class NavBar extends React.Component {
  state = {
    isOpen: false,
    user: null
  };

  componentDidMount() {
    this.fetchUserType();
  }
  render() {
    const { isOpen, user } = this.state;

    const wrapperStyles = {
      zIndex: 99997,
      position: 'relative'
    };

    if (user === null) {
      return <Loading />;
    }

    return (
      <div style={wrapperStyles}>
        <AppBar toggleDrawer={this.toggleDrawer} {...this.props} />
        {this.renderDrawer()}
      </div>
    );
  }

  renderDrawer() {
    let { user, isOpen } = this.state;

    switch (user.tipo) {
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
      this.setState({ user: user });
    });
  }

  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

export default NavBar;
