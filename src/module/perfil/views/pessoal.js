import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Foto from "../../../img/team-4.jpg";
import Phone from "@material-ui/icons/Phone";
import { ProfileStore } from "../store";

class Pessoal extends React.Component {
  render() {
    return (
      <Grid item xs={"100%"}>
        <Paper style={styles.container}>
          <div style={styles.box}>
            <img style={styles.pic} src={Foto} />
            <Typography variant="h6">Nome</Typography>
            <Typography variant="h6">{ProfileStore.userInfo.nome}</Typography>
          </div>
          <div style={styles.box}>
            <Phone />
            <Typography variant="h6">Telefone</Typography>
            <Typography variant="h6">
              {ProfileStore.userInfo.telefone}
            </Typography>
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
