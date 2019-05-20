import React from "react";

import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ProfileIcon from "@material-ui/icons/Person";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import CloseIcon from "@material-ui/icons/Clear";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import { firebase } from "../../../config/firebase/index";

import "./index.css";

const Item = ({ icon, text, ...rest }) => {
  return (
    <ListItem button {...rest}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText secondary={text} />
    </ListItem>
  );
};

class DrawerMenu extends React.Component {
  render() {
    // const isLoggedIn = !!firebase.auth().currentUser.uid;
    //const isLoggedOut = !firebase.auth().currentUser.uid;

    const { isOpen, toggleDrawer } = this.props;

    return (
      <div>
        <div className={isOpen ? "drawer open" : "drawer"}>
          <Toolbar
            style={{
              backgroundColor: "#000",
              height: "64px",
              cursor: "pointer",
              justifyContent: "flex-end"
            }}
            onClick={toggleDrawer}
          >
            <IconButton
              style={{
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, .05)"
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <List>
            <React.Fragment>
              <Item
                icon={<ProfileIcon />}
                text="Peril do Usuário"
                component={Link}
                to="/profile"
                onClick={toggleDrawer}
              />

              <Item
                icon={<LibraryAdd />}
                text="Criar Requisição"
                component={Link}
                to="/nova-requisicao"
                onClick={toggleDrawer}
                divider
              />
            </React.Fragment>
            <React.Fragment>
              <Item
                icon={<ProfileIcon />}
                text="Login"
                component={Link}
                to="/login"
                onClick={toggleDrawer}
              />
            </React.Fragment>
            <Item icon={<LogoutIcon />} text="Sair" />
          </List>
        </div>
        <div className="overlay" />
      </div>
    );
  }
}

export default DrawerMenu;
