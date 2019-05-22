import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Avatar } from "@material-ui/core";
import Foto from "../../../assets/img/perfil.png";
import actions from "../actions";
import { withStyles } from "@material-ui/core/styles";
import Loading from "../../../components/loading/";

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
    const { classes } = this.props;
    const user = this.state.user;

    if (!this.state.user) {
      return <Loading />;
    }
    return (
      <Paper style={{ marginTop: 150, marginLeft: 24, marginRight: 24 }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          xs={12}
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
        <Grid container xs={12} />
      </Paper>
    );
  }
  fetchUser() {
    actions.infoUser().then(data => {
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
