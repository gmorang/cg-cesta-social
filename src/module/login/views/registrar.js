import React from "react";

class RegistroUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      cpf: "",
      cnpj: "",
      telefone: "",
      email: "",
      password: "",
      endereco: { numero: "", rua: "", bairro: "" },
      isLoading: false
    };
  }
}
