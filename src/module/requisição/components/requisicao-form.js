import React from "react";
import { FormControl, Input, InputLabel, Grid } from "@material-ui/core";

class RequisicaoForm extends React.Component {
  render() {
    return (
      <form>
        <FormControl margin="normal" require fullWidth>
          <InputLabel htmlFor="nome">Nome</InputLabel>
          <Input
            id="nome"
            name="nome"
            autoComplete="nome"
            onChange={this.handleNome}
          />
        </FormControl>
        <Grid xs={12}>
          <FormControl margin="normal" style={{ marginRight: 25 }}>
            <InputLabel htmlFor="telefone">Telefone</InputLabel>
            <Input
              id="telefone"
              name="telefone"
              autoComplete="telefone"
              onChange={this._handleTelefone}
            />
          </FormControl>
          <FormControl margin="normal" style={{ marginRight: 25 }}>
            <InputLabel htmlFor="cpf">CPF</InputLabel>
            <Input
              id="cpf"
              name="cpf"
              autoComplete="cpf"
              onChange={this._handleCpf}
            />
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <FormControl margin="normal" style={{ marginRight: 25 }}>
            <InputLabel htmlFor="dependentes">Dependentes</InputLabel>
            <Input
              id="dependentes"
              name="dependentes"
              autoComplete="dependentes"
              onChange={this._handleDependentes}
            />
          </FormControl>
          <FormControl margin="normal">
            <InputLabel htmlFor="renda">Renda</InputLabel>
            <Input
              id="renda"
              name="renda"
              autoComplete="renda"
              onChange={this._handleOng}
            />
          </FormControl>
        </Grid>
        <FormControl margin="normal" require fullWidth>
          <InputLabel htmlFor="ong">ONG</InputLabel>
          <Input
            id="ong"
            name="ong"
            autoComplete="ong"
            onChange={this._handleCpf}
          />
        </FormControl>
      </form>
    );
  }
}
export default RequisicaoForm;
