import React from "react";

import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ContentWrapper from "../../../components/content-wrapper";
import LoginForm from "./login";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Grid } from "@material-ui/core";
import Titulo from "../../../components/titulo-pagina";

class Login extends React.Component {
  render() {
    const paperStyles = { padding: 24 };
    return (
      <ContentWrapper form={true}>
        <Titulo>Login</Titulo>
        <Paper style={paperStyles}>
          <LoginForm />
        </Paper>
      </ContentWrapper>
    );
  }
}

const styles = {
  avatar: {
    backgroundColor: "#FF3F00"
  }
};

export default Login;
