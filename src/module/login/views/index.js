import React from "react";

import Paper from "@material-ui/core/Paper";
import ContentWrapper from "../../../components/content-wrapper";
import LoginForm from "../components/login";
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

export default Login;
