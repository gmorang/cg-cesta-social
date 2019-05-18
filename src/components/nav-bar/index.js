import React from "react";
import AppBar from "./app-bar";
import DrawerMenu from "./drawer-menu/";

class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;

    const wrapperStyles = {
      zIndex: 99997,
      position: "relative"
    };

    return (
      <div style={wrapperStyles}>
        <AppBar toggleDrawer={this.toggleDrawer} {...this.props} />
        <DrawerMenu
          isOpen={isOpen}
          toggleDrawer={this.toggleDrawer}
          {...this.props}
        />
      </div>
    );
  }

  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

export default NavBar;
