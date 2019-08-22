import React from 'react';
import {
  Grid,
  Typography,
  Divider,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
  Select
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Titulo from '../../../components/titulo-pagina/';
import Loading from '../../../components/loading';
import actions from '../../../actions';

import { DatePicker } from '@material-ui/pickers';

class RequisicaoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requisicao: null,
      isVisibleApprove: false,
      message: null,
      dateText: null,
      dataRetirada: null,
      cestas: null,
      selectCesta: null,
      user: null
    };
  }

  componentDidMount() {
    this.fetchCestas();
    const requisicao = this.props.location.state.requisicao;
    this.setState({ requisicao: requisicao });
    this.fetchUser();
  }

  _formatTime = time => {
    const date = new Date(time);
    let options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    };
    return date.toLocaleDateString('pt-br', options);
  };

  _handleDataRetirada = date => {
    this.setState({ dataRetirada: this._formatTime(date) });
    console.log(this.state.dataRetirada);
  };

  _handleMessage = text => {
    this.setState({
      message: text.currentTarget.value
    });
    console.log(this.state.message);
  };

  _handleCesta = event => {
    this.setState({
      selectCesta: event.target.value
    });
  };
  _handleModal = () => {
    let { isVisibleApprove } = this.state;
    this.setState({ isVisibleApprove: !isVisibleApprove });
  };

  fetchUser = () => {
    actions.user.infoUser().then(res => {
      this.setState({ user: res });
    });
  };
  render() {
    const paperStyles = {
      borderRadius: 5,
      boxShadow: `1px 1px 6px ${'#d3d3d3'}`,
      padding: 24
    };
    const { requisicao, cestas, user } = this.state;
    if (requisicao === null) return <Loading />;
    if (cestas === null) return <Loading />;
    if (user === null) return <Loading />;
    return (
      <Grid style={{ marginTop: 90 }} item xs={12}>
        <Titulo>Detalhes</Titulo>
        <Grid container justify="center" alignItems="center">
          <Grid item sm={8} xs={12}>
            <Paper style={paperStyles}>
              <Grid container justify="center">
                <Grid item xs={9}>
                  <Typography
                    style={{
                      color: '#a9a9a9'
                    }}
                    variant="h5"
                    component="h5"
                  >
                    <strong
                      style={{
                        fontWeight: 'bold',
                        color: '#333',
                        textTransform: 'uppercase'
                      }}
                    >
                      Requisição{' '}
                    </strong>
                    #{requisicao.idRequisicao}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography align="right" variant="body1">
                    {this._formatTime(requisicao.date)}
                  </Typography>
                </Grid>
              </Grid>
              <Divider style={{ borderRadius: 20, color: '#d3d3d3' }} />
              <Grid container justify="center">
                <Grid style={{ marginTop: 30 }} item xs={7}>
                  <Typography variant="body2">
                    Nome: {requisicao.infoPessoais.nome}
                  </Typography>
                </Grid>
                <Grid style={{ marginTop: 30 }} item xs={5}>
                  <Typography variant="body2" align="right">
                    Telefone: {requisicao.infoPessoais.telefone}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <Typography variant="body2">
                    CPF: {requisicao.infoPessoais.cpf}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <Typography variant="body2">
                    Dependentes: {requisicao.infoPessoais.dependentes}
                  </Typography>
                </Grid>
              </Grid>
              <Divider
                style={{
                  borderRadius: 20,
                  color: '#d3d3d3',
                  marginTop: 15,
                  marginBottom: 15
                }}
              />
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="body2">
                    Situação: {requisicao.renda.situacao}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Profissão: {requisicao.renda.profissao}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="body2">
                    Renda Pessoal:R${requisicao.renda.rendaPessoal}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Renda Familiar:R${requisicao.renda.rendaFamiliar}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                style={{ marginTop: 40, textTransform: 'uppercase' }}
              >
                <Grid item xs={12}>
                  <Typography align="right" variant="h6">
                    {requisicao.status}
                  </Typography>
                </Grid>
              </Grid>
              {this.renderButtons()}
            </Paper>
          </Grid>
        </Grid>
        <Dialog
          fullWidth={true}
          open={this.state.isVisibleApprove}
          onClose={this._handleModal}
          aria-labelledby="max-width-dialog-title"
        >
          {this.renderForm()}
        </Dialog>
      </Grid>
    );
  }

  fetchCestas() {
    actions.ong.listaCesta().then(data => {
      this.setState({ cestas: data });
    });
    console.log(this.state.cestas);
  }

  _handleAprova = async () => {
    let idRequisicao = this.state.requisicao.idRequisicao;
    let idCesta = this.state.selectCesta;
    let { dataRetirada, message } = this.state;
    try {
      console.log(dataRetirada, message);
      actions.requisicao
        .aprovaRequisicao(idRequisicao, dataRetirada, message, idCesta)
        .then(() => {
          actions.ong.updateCesta(idCesta);
          this.setState({ isVisibleApprove: false });
          this.props.history.push('/requisicoes');
        });
    } catch (e) {
      console.log(e);
    }
  };

  _handleReprova = async () => {
    let idRequisicao = this.state.requisicao.idRequisicao;
    const { dataRetirada, message } = this.state;
    try {
      actions.requisicao
        .reprovaRequisicao(idRequisicao, message, dataRetirada)
        .then(() => {
          this.setState({ isVisibleApprove: false });
        });
    } catch (e) {
      console.log(e);
    }
  };

  _handleFinaliza = async () => {
    console.log('finalizou');
  };

  renderForm() {
    let { requisicao } = this.state;
    switch (requisicao.status) {
      default:
        return <Loading />;
      case 'aprovada':
        return (
          <div>
            <DialogTitle>
              Tem certeza que deseja finalizar essa requisição?
            </DialogTitle>
            <DialogContent>
              <Grid container>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={styles.submit}
                    onClick={this._handleFinaliza}
                  >
                    Aprovar
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </div>
        );

      case 'pendente':
        return (
          <div>
            <DialogTitle>Você deseja aprovar essa requisição?</DialogTitle>
            <DialogContent>
              <Grid item xs={12}>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Mensagem"
                    multiline
                    rowsMax="4"
                    value={this.state.message}
                    onChange={this._handleMessage}
                    margin="normal"
                  />
                </FormControl>
                <Grid item xs={12}>
                  <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="cesta">Selecione a cesta</InputLabel>
                    <Select
                      id="cesta"
                      name="cesta"
                      value={this.state.selectCesta}
                      onChange={this._handleCesta}
                    >
                      {this.state.cestas.map(cesta => {
                        return (
                          <MenuItem
                            onClick={this._handleCesta}
                            value={cesta.idCesta}
                          >
                            {cesta.idCesta}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <DatePicker
                  disableToolbar
                  variant="inline"
                  label="Data de Retirada"
                  value={this.state.dataRetirada}
                  onChange={this._handleDataRetirada}
                  format="dd/MM/yyyy"
                />
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={styles.submit}
                    onClick={this._handleAprova}
                  >
                    Aprovar
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          </div>
        );
    }
  }

  renderButtons() {
    let { user } = this.state;
    console.log(user);
    if (user.tipo === 'usuario') {
      return null;
    } else {
      switch (this.state.requisicao.status) {
        case 'aprovada':
          return (
            <Grid style={{ marginTop: 20 }} container>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={styles.submit}
                  onClick={this._handleModal}
                >
                  Confirmar Retirada
                </Button>
              </Grid>
            </Grid>
          );

        case 'pendente':
          return (
            <Grid style={{ marginTop: 20 }} container>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={styles.submit}
                  onClick={this._handleModal}
                >
                  Aprovar
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  style={styles.danger}
                  onClick={this._handleReprova}
                >
                  Reprovar
                </Button>
              </Grid>
            </Grid>
          );
        case 'reprovada':
          return null;

        default:
          return <Loading />;
      }
    }
  }
}

const styles = {
  submit: {
    backgroundColor: '#131112',
    float: 'right',
    marginLeft: 10
  },
  danger: {
    backgroundColor: '#ff0000',
    float: 'right',
    color: '#fff'
  }
};
export default withRouter(RequisicaoDetails);
