import React from "react";

import Paper from "@material-ui/core/Paper";
import ContentWrapper from "../../../components/content-wrapper";
import Titulo from "../../../components/titulo-pagina";
import FormUser from "../components/form-user";

class IncluirUser extends React.Component {
  render() {
    const paperStyles = { padding: 24 };
    return (
      <ContentWrapper form={true}>
        <Titulo>Cadastro de novo usuário </Titulo>
        <Paper style={paperStyles}>
          <FormUser />
        </Paper>
      </ContentWrapper>
    );
  }
}

export default IncluirUser;
