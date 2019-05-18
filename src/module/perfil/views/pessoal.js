import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Foto from "../../../img/team-4.jpg";
import Divider from "@material-ui/core/Divider";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

class Pessoal extends React.Component {
  render() {
    return (
      <Grid item xs={"100%"}>
        <Paper style={styles.container}>
          <div style={styles.box}>
            <img style={styles.pic} src={Foto} />
            <Typography variant="h6">Nome</Typography>
          </div>
          <div style={styles.box}>
            <Phone />
            <Typography variant="h6">Telefone</Typography>
            <Email />
            <Typography variant="h6">e-mail</Typography>
            <Lock />
            <Typography variant="h6">Password</Typography>
          </div>
        </Paper>
      </Grid>
    );
  }
}

const styles = {
  box: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    height: "50%",
    width: "25%",

    marginRight: 50
  },
  pic: {
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 100
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Pessoal;
