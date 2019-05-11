import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "../assets/img/logo.png";

//Aqui foi criado um component chamado NavBar que depois importei ele na View "home"

const NavBar = () => {
  return (
    <div>
      <AppBar style={styles.appBar} position="fixed">
        <Toolbar style={styles.toolbar}>
          <img style={styles.logo} src={Logo} alt="logo" />

          <Typography variant="h6" color="inherit" style={styles.grow}>
            Cesta Social
          </Typography>
          <Button color="inherit" href="/login">
            Login
          </Button>
          <Button color="inherit">Cadastro</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
// embaixo foi feito o estilo do component dessa forrma depois so chamar ele pelo nome onde quiser usar
// por exemplo : <AppBar style={styles.container }/> dessa forma usaremos o estilo
const styles = {
  container: {
    background: "#140F2D"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  appBar: {
    backgroundColor: "#000"
  }
};

export default NavBar;
