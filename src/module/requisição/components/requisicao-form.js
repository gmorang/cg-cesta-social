import React from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";

class RequisicaoForm extends React.Component {


render() {
  return(
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
        <FormControl margin="nomral" style={{marginRight: 25}}>
          <InputLabel htmlFor="data">Data</InputLabel>
          <Input
          id="data"
          name="data"
          autoComplete="data"
          onChange={this.handleData}
          />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="cpf">CPF</InputLabel>
            <Input
            id="cpf"
            name="cpf"
            autoComplete="cpf"
            onChange={this.handleCpf}
            />
          </InputLabel>
        </FormControl>
      </Grid>
    </form>
  )
}
export default RequisicaoForm;
