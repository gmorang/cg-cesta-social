import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  Grid,
  Select,
  MenuItem,
  Typography,
  InputAdornment,
  Button
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

class RequisicaoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requisicao: {
        infoPessoais: {
          nome: "",
          telefone: "",
          cpf: "",
          dependentes: 0
        },
        ong: {
          nome: ""
        },
        renda: {
          situacao: "",
          profissao: "",
          rendaFamiliar: "",
          rendaPessoal: ""
        }
      }
    };
  }

  _handleNome = text => {
    this.setState({
      infoPessoais: {
        ...this.state.requisicao.infoPessoais,
        nome: text.currentTarget.value
      }
    });
    console.log(this.state.requisicao.infoPessoais.nome);
  };

  render() {
    return (
      <div>
        <Typography variant="h6">Informações Pessoais</Typography>
        <form>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="nome">Nome</InputLabel>
            <Input
              id="nome"
              name="nome"
              autoComplete="nome"
              onChange={this._handleNome}
              value={this.state.requisicao.infoPessoais.nome}
            />
          </FormControl>
          <Grid item xs={12}>
            <FormControl margin="normal" style={{ marginRight: 25 }}>
              <InputLabel htmlFor="telefone">Telefone</InputLabel>
              <Input
                id="telefone"
                name="telefone"
                autoComplete="telefone"
                onChange={this._handleTelefone}
                value={this.state.requisicao.infoPessoais.telefone}
              />
            </FormControl>
            <FormControl margin="normal" style={{ marginRight: 25 }}>
              <InputLabel htmlFor="cpf">CPF</InputLabel>
              <Input
                id="cpf"
                name="cpf"
                autoComplete="cpf"
                onChange={this._handleCpf}
                value={this.state.requisicao.infoPessoais.cpf}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl margin="normal" style={{ marginRight: 25 }}>
              <InputLabel htmlFor="dependentes">Dependentes</InputLabel>
              <Input
                id="dependentes"
                name="dependentes"
                autoComplete="dependentes"
                onChange={this._handleDependentes}
                value={this.state.requisicao.infoPessoais.dependentes}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 20 }}>
            <Typography variant="h6">Selecione a ONG</Typography>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="ong">ONG</InputLabel>
              <Select
                id="ong"
                name="ong"
                value={this.state.requisicao.ong.nome}
                onChange={this.handleNomeOng}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 30 }}>
            <Typography variant="h6">Renda</Typography>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="situacao">Situação</InputLabel>
              <Select
                id="situacao"
                name="situacao"
                value={this.state.requisicao.renda.situacao}
                onChange={this.handleSituacao}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Empregado(a)</MenuItem>
                <MenuItem value={20}>Desempregado(a)</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="profissao">Profissão</InputLabel>
              <Input
                id="profissao"
                name="profissao"
                autoComplete="profissao"
                value={this.state.requisicao.renda.profissao}
                onChange={this.handleProfissao}
              />
            </FormControl>
            <Grid container style={{ marginTop: 10 }}>
              <FormControl style={{ marginRight: 25 }}>
                <InputLabel htmlFor="renda-familiar">Renda Familiar</InputLabel>
                <Input
                  id="remda-familiar"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  value={this.state.requisicao.renda.rendaFamiliar}
                  onChange={this.handleRendaFamiliar}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="renda-pessoal">Renda Pessoal</InputLabel>
                <Input
                  id="renda-pessoal"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  value={this.state.requisicao.renda.rendaPessoal}
                  onChange={this.handleRendaPessoal}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={styles.submit}
              onClick={this._handleCadastraUsuario}
            >
              Enviar Requisição
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}
const styles = {
  submit: {
    backgroundColor: "#131112",
    float: "right"
  }
};

export default withRouter(RequisicaoForm);
