import React from "react";
import RequisicaoForm from "../components/requisicao-form";
import InputLabel from "@material-ui/core/InputLabel";
import { Input } from "@material-ui/core";

class Requisicao extends React.Component {
  render() {
    return (
      <div>
        <h1>Tela de Requisicao</h1>
        <RequisicaoForm />
      </div>
    );
  }
}

export default Requisicao;
