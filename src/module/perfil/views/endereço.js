import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Location from "@material-ui/icons/LocationOn";
import { ProfileStore } from "../store";

class Endereço extends React.Component {
  render() {
    return (
      <Grid item xs={12}>
        <Paper style={styles.container}>
          <div style={styles.box}>
            <Location />
            <Typography variant="h6">CPF</Typography>
            <Typography variant="h6">{ProfileStore.userInfo.cpf}</Typography>
            <Typography variant="h6">Estado</Typography>
            <Typography variant="h6">{ProfileStore.userInfo.estado}</Typography>
            <Typography variant="h6">Cidade</Typography>
            <Typography variant="h6">{ProfileStore.userInfo.cidade}</Typography>
            <Typography variant="h6">CEP</Typography>
            <Typography variant="h6">{ProfileStore.userInfo.cep}</Typography>
          </div>

          <div style={styles.box}>
            <Location />
            <Typography variant="h6">Rua</Typography>

            <Typography variant="h6">{ProfileStore.userInfo.rua}</Typography>
            <Typography variant="h6">Número</Typography>
            <Typography variant="h6">{ProfileStore.userInfo.numero}</Typography>
            <Typography variant="h6">Bairro</Typography>
            <Typography variant="h6">{ProfileStore.userInfo.bairro}</Typography>
            <Typography variant="h6">Complemento</Typography>
            <Typography variant="h6">
              {ProfileStore.userInfo.complemento}
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

export default Endereço;
