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
import actions from "../../../actions";
import Loading from "../../../components/loading";

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

  /**Funções para atualizar as variaveis de estado */
  _handleNome = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        infoPessoais: {
          nome: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.infoPessoais.nome);
  };

  _handleTelefone = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        infoPessoais: {
          telefone: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.infoPessoais.telefone);
  };

  _handleCpf = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        infoPessoais: {
          cpf: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.infoPessoais.cpf);
  };

  _handleDependentes = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        infoPessoais: {
          dependentes: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.infoPessoais.dependentes);
  };

  _handleNomeOng = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        ong: {
          nome: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.ong.nome);
  };

  _handleSituacao = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        renda: {
          situacao: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.renda.situacao);
  };

  _handleProfissao = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        renda: {
          profissao: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.renda.profissao);
  };

  _handleRendaFamiliar = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        renda: {
          rendaFamiliar: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.renda.rendaFamiliar);
  };

  _handleRendaPessoal = text => {
    this.setState({
      requisicao: {
        ...this.state.requisicao,
        renda: {
          rendaPessoal: text.currentTarget.value
        }
      }
    });
    console.log(this.state.requisicao.renda.rendaPessoal);
  };

  /**
   * Função para criar requisição
   */
  criaRequisicao = async event => {
    event.preventDefault();
    let { requisicao } = this.state;
    console.log(requisicao);
    try {
      actions.requisicao.criaRequisicao(requisicao);
    } catch (err) {
      console.log(err);
    }
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
                onChange={this._handleNomeOng}
              >
                <MenuItem value={this.state.requisicao.ong.nome}>
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
                onChange={this._handleSituacao}
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
                onChange={this._handleProfissao}
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
                  onChange={this._handleRendaFamiliar}
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
                  onChange={this._handleRendaPessoal}
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
              onClick={this.criaRequisicao}
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
