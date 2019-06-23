import React from "react";

import Paper from "@material-ui/core/Paper";
import ContentWrapper from "../../../components/content-wrapper";
import Titulo from "../../../components/titulo-pagina";
import FormAdm from "../components/form-adm";

class IncluirAdm extends React.Component {
  render() {
    const paperStyles = { padding: 24 };
    return (
      <ContentWrapper form={true}>
        <Titulo>Cadastro de novo Admin </Titulo>
        <Paper style={paperStyles}>
          <FormAdm />
        </Paper>
      </ContentWrapper>
    );
  }
}

export default IncluirAdm;
