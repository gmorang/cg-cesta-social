import React from "react";
import RequisicaoForm from "../components/requisicao-form";
import ContentWrapper from "../../../components/content-wrapper";
import { withRouter } from "react-router-dom";

class Requisicao extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <h1>Nova Requisição</h1>
        <RequisicaoForm />
      </ContentWrapper>
    );
  }
}

export default withRouter(Requisicao);
