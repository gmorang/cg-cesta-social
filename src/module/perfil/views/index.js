import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Avatar, Divider } from "@material-ui/core";
import Foto from "../../../assets/img/perfil.png";
import actions from "../../../actions/";
import { withStyles } from "@material-ui/core/styles";
import Loading from "../../../components/loading/";
import Endereco from "../components/endereco";
import Arquivos from "../components/arquivos";

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    const gridStyles = {
      borderRadius: 5,
      boxShadow: `1px 1px 6px ${"#d3d3d3"}`,
      padding: 10,
      marginTop: 10
    };
    const { classes } = this.props;
    const user = this.state.user;

    if (!this.state.user) {
      return <Loading />;
    }
    return (
      <Paper style={{ marginTop: 150, marginLeft: 18, marginRight: 18 }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ padding: 24 }}
        >
          <Avatar alt="foto-usuario" src={Foto} className={classes.bigAvatar} />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography variant="h6">{user.nome}</Typography>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography variant="subtitle1">{user.telefone}</Typography>
        </Grid>
        <Divider style={{ margin: 20 }} />
        <Grid
          container
          style={{ padding: 10 }}
          justify="center"
          alignItems="center"
        >
          <Grid item sm={12} xs={12} style={gridStyles}>
            <Endereco user={this.state.user} />
          </Grid>
        </Grid>
      </Paper>
    );
  }
  fetchUser() {
    actions.user.infoUser().then(data => {
      this.setState({ user: data });
    });
  }
}

const styles = {
  bigAvatar: {
    marginTop: -70,
    width: 150,
    height: 150
  }
};

export default withStyles(styles)(Perfil);
