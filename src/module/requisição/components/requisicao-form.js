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
      },
      idRequisicao: ""
    };
  }

  /**Função para atribuir um id para a requisição,
   * ela puxa a quantidade de requisiçoes presentes no banco
   * e soma +1
   */
  componentDidMount() {
    actions.requisicao.listaRequisicao().then(data => {
      this.setState({ idRequisicao: data.length++ });
    });
  }

  /**Funções para atualizar as variaveis de estado */
  _handleNome = text => {
    console.log("text: ", text);

    this.setState({
      infoPessoais: {
        ...this.state.infoPessoais,
        nome: text.currentTarget.value
      }
    });
  };

  _handleTelefone = text => {
    console.log("text: ", text);

    this.setState({
      infoPessoais: {
        ...this.state.infoPessoais,
        telefone: text.currentTarget.value
      }
    });
    console.log(this.state.infoPessoais.telefone);
  };

  _handleCpf = text => {
    this.setState({
      infoPessoais: {
        ...this.state.infoPessoais,
        cpf: text.currentTarget.value
      }
    });
    console.log(this.state.infoPessoais.cpf);
  };

  _handleDependentes = text => {
    this.setState({
      infoPessoais: {
        ...this.state.infoPessoais,
        dependentes: text.currentTarget.value
      }
    });
    console.log(this.state.infoPessoais.dependentes);
  };

  _handleNomeOng = text => {
    this.setState({
      ong: {
        ...this.state.ong,
        nome: text.currentTarget.value
      }
    });
    console.log(this.state.ong.nome);
  };

  _handleSituacao = text => {
    this.setState({
      renda: {
        ...this.state.renda,
        situacao: text.currentTarget.value
      }
    });
    console.log(this.state.renda.situacao);
  };

  _handleProfissao = text => {
    this.setState({
      renda: {
        ...this.state.renda,
        profissao: text.currentTarget.value
      }
    });
    console.log(this.state.renda.profissao);
  };

  _handleRendaFamiliar = text => {
    this.setState({
      renda: {
        ...this.state.renda,
        rendaFamiliar: text.currentTarget.value
      }
    });
    console.log(this.state.renda.rendaFamiliar);
  };

  _handleRendaPessoal = text => {
    this.setState({
      renda: {
        ...this.state.renda,
        rendaPessoal: text.currentTarget.value
      }
    });
  };

  /**
   * Função para criar requisição
   */
  criaRequisicao = async event => {
    event.preventDefault();
    let state = this.state;

    console.log(this.state);

    try {
      actions.requisicao.criaRequisicao(state);
      this.props.history.push("/perfil");
    } catch (err) {
      console.log(err);
    }

    this.props.history.push("/perfil");
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
              value={this.state.infoPessoais.nome}
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
                value={this.state.infoPessoais.telefone}
              />
            </FormControl>
            <FormControl margin="normal" style={{ marginRight: 25 }}>
              <InputLabel htmlFor="cpf">CPF</InputLabel>
              <Input
                id="cpf"
                name="cpf"
                autoComplete="cpf"
                onChange={this._handleCpf}
                value={this.state.infoPessoais.cpf}
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
                value={this.state.infoPessoais.dependentes}
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
                value={this.state.ong.nome}
                onChange={this._handleNomeOng}
              >
                <MenuItem value={this.state.ong.nome}>
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
                value={this.state.renda.situacao}
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
                value={this.state.renda.profissao}
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
                  value={this.state.renda.rendaFamiliar}
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
                  value={this.state.renda.rendaPessoal}
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
