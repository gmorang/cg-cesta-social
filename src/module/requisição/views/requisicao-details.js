import React from 'react';
import { Grid, Typography, Divider, Paper } from '@material-ui/core';
import PersonPinCircleOutlined from '@material-ui/icons/PersonPinCircleOutlined';
import { withRouter } from 'react-router-dom';
import Titulo from '../../../components/titulo-pagina/';
import Loading from '../../../components/loading';

class RequisicaoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requisicao: null
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
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(RequisicaoDetails);
