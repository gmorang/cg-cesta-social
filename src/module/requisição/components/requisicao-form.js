import React from "react";
import { FormControl, Input, InputLabel, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

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
          <FormControl margin="nomral" style={{ marginRight: 25 }}>
            <InputLabel htmlFor="data">Data</InputLabel>
            <Input
              id="data"
              name="data"
              autoComplete="data"
              onChange={this.handleData}
            />
          </FormControl>
        </Grid>
        <FormControl margin="normal">
          <InputLabel htmlFor="cpf">CPF</InputLabel>
          <Input
            id="cpf"
            name="cpf"
            autoComplete="cpf"
            onChange={this.handleCpf}
          />
        </FormControl>
        <FormControl margin="nomral" style={{ marginRight: 25 }}>
          <InputLabel htmlFor="renda">Renda</InputLabel>
          <Input
            id="renda"
            name="renda"
            autoComplete="renda"
            onChange={this.handleRenda}
          />
        </FormControl>
        <FormControl margin="nomral" style={{ marginRight: 25 }}>
          <InputLabel htmlFor="dependentes">Dependentes</InputLabel>
          <Input
            id="dependentes"
            name="dependentes"
            autoComplete="dependentes"
            onChange={this.handleDependentes}
          />
        </FormControl>
        <FormControl margin="nomral" require fullWidth>
          <InputLabel htmlFor="ong">ONG</InputLabel>
          <Input
            id="ong"
            name="ong"
            autoComplete="ong"
            onChange={this.handleONG}
          />
        </FormControl>
        <FormControl margin="nomral" style={{ marginRight: 25 }}>
          <InputLabel htmlFor="atividade">Atividade</InputLabel>
          <Input
            id="atividade"
            name="atividade"
            autoComplete="atividade"
            onChange={this.handleAtividade}
          />
        </FormControl>
        <FormControl margin="nomral" style={{ marginRight: 25 }}>
          <InputLabel htmlFor="situação">Situação</InputLabel>
          <Input
            id="situação"
            name="situação"
            autoComplete="situação"
            onChange={this.handleSituação}
          />
        </FormControl>
        <FormControl margin="nomral" style={{ marginRight: 25 }}>
          <InputLabel htmlFor="rg">RG</InputLabel>
          <Input id="rg" name="rg" autoComplete="rg" onChange={this.handleRg} />
        </FormControl>
        <FormControl margin="nomral" style={{ marginRight: 25 }}>
          <InputLabel htmlFor="status">Status</InputLabel>
          <Input
            id="status"
            name="status"
            autoComplete="status"
            onChange={this.handleTipodecesta}
          />
        </FormControl>
      </form>
    );
  }
}

export default RequisicaoForm;
