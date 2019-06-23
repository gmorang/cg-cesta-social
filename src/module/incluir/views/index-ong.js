import React from "react";

import Paper from "@material-ui/core/Paper";
import ContentWrapper from "../../../components/content-wrapper";
import Titulo from "../../../components/titulo-pagina";
import FormOng from "../components/form-ong";

class IncluirOng extends React.Component {
  render() {
    const paperStyles = { padding: 24 };
    return (
      <ContentWrapper form={true}>
        <Titulo>Cadastro de nova ONG</Titulo>
        <Paper style={paperStyles}>
          <FormOng />
        </Paper>
      </ContentWrapper>
    );
  }
}

export default IncluirOng;
