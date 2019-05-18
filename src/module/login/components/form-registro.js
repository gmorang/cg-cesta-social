import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import cep from "cep-promise";
import actions from "../actions";

class RegistroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      cpf: "",
      cnpj: "",
      telefone: "",
      email: "",
      password: "",
      cep: "",
      numero: "",
      rua: "",
      bairro: "",
      complemento: "",
      cidade: "",
      estado: "",
      isLoading: false
    };
  }

  _pesquisaCep = () => {
    cep(this.state.cep).then(data => {
      console.log(data);
      this.setState({
        rua: data.street,
        bairro: data.neighborhood,
        cidade: data.city,
        estado: data.state
      });
    });
  };

  _handleEmail = text => {
    this.setState({
      email: text.currentTarget.value
    });

    console.log(this.state.email);
  };

  _handlePassword = text => {
    this.setState({
      password: text.currentTarget.value
    });
  };

  _handleCpf = text => {
    this.setState({
      cpf: text.currentTarget.value
    });
  };
  _handleCep = text => {
    this.setState({
      cep: text.currentTarget.value
    });
  };

  _handleNome = text => {
    this.setState({
      nome: text.currentTarget.value
    });
  };
  _handleTelefone = text => {
    this.setState({
      telefone: text.currentTarget.value
    });
  };

  _handleRua = text => {
    this.setState({
      rua: text.currentTarget.value
    });
  };
  _handleNumero = text => {
    this.setState({
      numero: text.currentTarget.value
    });
  };
  _handleBairro = text => {
    this.setState({
      bairro: text.currentTarget.value
    });
  };
  _handleCidade = text => {
    this.setState({
      cidade: text.currentTarget.value
    });
  };

  _handleEstado = text => {
    this.setState({
      estado: text.currentTarget.value
    });
  };
  _handleComplemento = text => {
    this.setState({
      complemento: text.currentTarget.value
    });
  };

  _handleCadastraUsuario = async event => {
    event.preventDefault();
    let {
      nome,
      telefone,
      cpf,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      complemento,
      email,
      password
    } = this.state;
    try {
      actions.register(
        nome,
        telefone,
        cpf,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        complemento,
        email,
        password
      );
      this.props.history.push("/");
    } catch (e) {
      window.alert(e.message);
    }
  };
  render() {
    return (
      <form>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="nome">Nome</InputLabel>
          <Input
            value={this.state.nome}
            id="nome"
            name="nome"
            autoComplete="nome"
            autoFocus
            onChange={this._handleNome}
          />
        </FormControl>
        <Grid xs={12}>
          <FormControl margin="normal" style={{ marginRight: 25 }}>
            <InputLabel htmlFor="telefone">Telefone</InputLabel>
            <Input
              value={this.state.telefone}
              id="telefone"
              name="telefone"
              autoComplete="telefone"
              onChange={this._handleTelefone}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel htmlFor="cpf">CPF</InputLabel>
            <Input
              value={this.state.cpf}
              id="cpf"
              name="cpf"
              autoComplete="cpf"
              onChange={this._handleCpf}
            />
          </FormControl>
        </Grid>
        <FormControl margin="normal">
          <InputLabel htmlFor="rua">CEP</InputLabel>
          <Input
            value={this.state.cep}
            id="endereco-cep"
            name="endereco-cep"
            autoComplete="endereco-cep"
            onChange={this._handleCep}
          />
        </FormControl>
        <FormControl style={{ marginLeft: 30 }} margin="normal">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={styles.submit}
            onClick={this._pesquisaCep}
          >
            Buscar
          </Button>
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="rua">Rua</InputLabel>
          <Input
            value={this.state.rua}
            id="endereco-rua"
            name="endereco-rua"
            autoComplete="endereco-rua"
            onChange={this._handleRua}
          />
        </FormControl>
        <FormControl style={{ marginRight: 15 }} margin="normal">
          <InputLabel htmlFor="numero">Número</InputLabel>
          <Input
            value={this.state.numero}
            id="endereco-numero"
            name="endereco-numero"
            autoComplete="endereco-numero"
            onChange={this._handleNumero}
          />
        </FormControl>
        <FormControl style={{ marginRight: 15 }} margin="normal">
          <InputLabel htmlFor="bairro">Bairro</InputLabel>
          <Input
            value={this.state.bairro}
            id="endereco-bairro"
            name="endereco-bairro"
            autoComplete="endereco-bairro"
            onChange={this._handleBairro}
          />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="cidade">Cidade</InputLabel>
          <Input
            value={this.state.cidade}
            id="endereco-cidade"
            name="endereco-cidade"
            autoComplete="endereco-cidade"
            onChange={this._handleCidade}
          />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="estado">Estado</InputLabel>
          <Input
            value={this.state.estado}
            id="endereco-estado"
            name="endereco-estado"
            autoComplete="endereco-estado"
            onChange={this._handleEstado}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="complemento">Complemento</InputLabel>
          <Input
            value={this.state.complemento}
            id="endereco-complemento"
            name="endereco-complemento"
            autoComplete="endereco-complemento"
            onChange={this._handleComplemento}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            value={this.state.email}
            id="email"
            name="email"
            autoComplete="email"
            onChange={this._handleEmail}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Senha</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this._handlePassword}
          />
        </FormControl>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={styles.submit}
            onClick={this._handleCadastraUsuario}
          >
            Cadastrar
          </Button>
        </Grid>
      </form>
    );
  }
}
const styles = {
  submit: {
    backgroundColor: "#131112"
  }
};

export default RegistroForm;
