import React from "react";

import Paper from "@material-ui/core/Paper";
import ContentWrapper from "../../../components/content-wrapper";
import Titulo from "../../../components/titulo-pagina";
import RegistroForm from "../components/form-registro";

class Registro extends React.Component {
  render() {
    const paperStyles = { padding: 24 };
    return (
      <ContentWrapper form={true}>
        <Titulo>Cadastre-se</Titulo>
        <Paper style={paperStyles}>
          <RegistroForm />
        </Paper>
      </ContentWrapper>
    );
  }
}

export default Registro;
