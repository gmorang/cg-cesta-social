import React from "react";
import ContentWrapper from "../../../components/content-wrapper";
import Titulo from "../../../components/titulo-pagina";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import actions from "../actions";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Pessoal from "./pessoal";
import Endereço from "./endereço";
import { firebase } from "../../../config/firebase/";
import Loading from "../../../components/loading/";

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    console.log(firebase.auth().currentUser.uid);
    actions.infoUser();
  }

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const state = this.state;

    console.log("user", state.user);
    return (
      <ContentWrapper aling="top">
        <Titulo>Perfil</Titulo>
        <Grid container spacing={24} style={{ justifyContent: "center" }}>
          <Grid item xs={8}>
            <Paper style={styles.root}>
              <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab label="informaçoes pessoais" />
                  <Tab label="Endereços" />
                  <Tab label="Upload de arquivos" />
                </Tabs>
              </AppBar>
              {value === 0 && <Pessoal />}
              {value === 1 && <Endereço />}
              {value === 2 && <TabContainer>Item Three</TabContainer>}
            </Paper>
          </Grid>
        </Grid>
      </ContentWrapper>
    );
  }
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default Perfil;
