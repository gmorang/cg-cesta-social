import React from 'react';
import {
  Grid,
  Typography,
  Divider,
  Paper,
  Button,
  Dialog
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Titulo from '../../../components/titulo-pagina/';
import Loading from '../../../components/loading';
import DialogForm from '../components/dialog-form';
import actions from '../../../actions';

class RequisicaoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requisicao: null,
      isVisibleApprove: false
    };
  }

  componentDidMount() {
    const requisicao = this.props.location.state.requisicao;
    this.setState({ requisicao: requisicao });
    console.log(requisicao);
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

  _handleModal = () => {
    let { isVisibleApprove } = this.state;
    this.setState({ isVisibleApprove: !isVisibleApprove });
  };

  render() {
    const gridStyles = {
      borderRadius: 5,
      boxShadow: `1px 1px 6px ${'#d3d3d3'}`,
      padding: 24
    };

    const typographyStyles = {
      paddingTop: 10,
      paddingLeft: 10
    };

    const paperStyles = {
      borderRadius: 5,
      boxShadow: `1px 1px 6px ${'#d3d3d3'}`,
      padding: 24
    };
    const { requisicao } = this.state;
    if (requisicao === null) return <Loading />;
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
                    Profissao: {requisicao.renda.profissao}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="body2">
                    Renda Pessoal: {requisicao.renda.rendaPessoal}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Renda Familiar: {requisicao.renda.rendaFamiliar}
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
              <Grid style={{ marginTop: 20 }} container>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={styles.submit}
                    onClick={this._handleModal}
                  >
                    Aprovacao
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Dialog
          fullWidth={true}
          open={this.state.isVisibleApprove}
          onClose={this._handleModal}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogForm
            aprova={this._handleAprova}
            reprova={this._handleReprova}
          />
        </Dialog>
      </Grid>
    );
  }

  _handleAprova = async (dataRetirada, message) => {
    let idRequisicao = this.state.requisicao.idRequisicao;
    try {
      actions.requisicao
        .aprovaRequisicao(idRequisicao, dataRetirada, message)
        .then(() => {
          alert('Requisicao Aprovada com Sucesso');
          this.setState({ isVisibleApprove: false });
        });
    } catch (e) {
      console.log(e);
    }
  };
}

const styles = {
  submit: {
    backgroundColor: '#131112',
    float: 'right',
    marginLeft: 10
  },
  danger: {
    backgroundColor: '#ff0000',
    float: 'right'
  }
};
export default withRouter(RequisicaoDetails);
