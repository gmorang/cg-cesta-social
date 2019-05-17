import React from "react";
import ContentWrapper from "../../../components/content-wrapper";
import Titulo from "../../../components/titulo-pagina";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import actions from "../actions";
class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {}

  render() {
    return (
      <ContentWrapper aling="top">
        <Titulo>Perfil</Titulo>
        <Grid container spacing={24} style={{ justifyContent: "center" }}>
          <Grid item xs={12}>
            <Paper style={styles.container}>
              <div style={styles.divs}>
                <Typography component="h5">Nome</Typography>
                <Typography component="h5">CPF</Typography>
              </div>
              <div style={styles.divs}>
                <Typography component="h5">CPF</Typography>
                <Typography component="h5">CNPJ</Typography>
              </div>
              <div style={styles.divs}>
                <Typography component="h5">Telefone</Typography>
                <Typography component="h5">e-mail</Typography>
              </div>
              <div style={styles.divs}>
                <Typography component="h5">cep</Typography>
                <Typography component="h5">Numero</Typography>
              </div>
              <div style={styles.divs}>
                <Typography component="h5">Rua</Typography>
                <Typography component="h5">Bairro</Typography>
              </div>
              <div style={styles.divs}>
                <Typography component="h5">Complemento</Typography>
                <Typography component="h5">Cidade</Typography>
                <Typography component="h5">Estado</Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </ContentWrapper>
    );
  }
}
const styles = {
  container: {
    padding: 24,
    display: "flex",
    flexDirection: "column"
  },
  divs: {
    display: "flex",
    flexDirection: "row"
  }
};

export default Perfil;
