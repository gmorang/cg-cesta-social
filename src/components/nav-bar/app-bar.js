import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../assets/img/icon-branco.png";

class AppHeader extends React.Component {
  render() {
    const { toggleDrawer } = this.props;

    const iconStyles = {
      color: "#FFF"
    };

    return (
      <AppBar position="fixed">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#000"
          }}
        >
          <Grid container justify="flex-start">
            <Grid item>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon style={iconStyles} />
              </IconButton>
            </Grid>
          </Grid>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img style={{ width: 40 }} src={Logo} alt="logo" />
          </a>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppHeader;
