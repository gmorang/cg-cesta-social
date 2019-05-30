import React from "react";
import RequisicaoForm from "../components/requisicao-form";
import ContentWrapper from "../../../components/content-wrapper";

class Requisicao extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <h1>Tela de Requisicao</h1>
        <RequisicaoForm />
      </ContentWrapper>
    );
  }
}

export default Requisicao;
