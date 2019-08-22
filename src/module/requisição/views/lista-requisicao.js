import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Hidden,
  Grid
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import RequisicaoRow from '../components/rquisicao-row';
import Titulo from '../../../components/titulo-pagina';

import actions from '../../../actions/';
import Loading from '../../../components/loading';

import RequisicaoMobile from './lista-requisicao-mobile';

class Requisicoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requisicoes: null,
      user: null
    };
  }

  componentDidMount = async () => {
    await this.fetchUser();
    await this.fetchRequisicoes();
  };

  render() {
    const { requisicoes, user } = this.state;
    if (requisicoes === null) {
      return <Loading />;
    }
    if (user === null) {
      return <Loading />;
    }
    return (
      <Grid item xs={12} style={{ marginTop: 90 }}>
        <Titulo>Requisições</Titulo>
        <Grid item xs={12} style={{ padding: 10 }}>
          <Hidden xsDown>
            <Paper style={{ padding: 20 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Numero da Requisição</TableCell>
                    <TableCell align="right">Data</TableCell>
                    <TableCell align="right">Nome</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.requisicoes.map(row => {
                    let user = this.state.user.nome;
                    return user === row.ong.nome ? (
                      <RequisicaoRow
                        key={row.idRequisicao}
                        row={row}
                        onClick={() => this.handleClicked(row)}
                      />
                    ) : null;
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Hidden>
          <Hidden smUp>
            {this.state.requisicoes.map(row => (
              <Paper onClick={() => this.handleClicked(row)}>
                <RequisicaoMobile key={row.idRequisicao} row={row} />
              </Paper>
            ))}
          </Hidden>
        </Grid>
      </Grid>
    );
  }

  fetchUser() {
    actions.user.infoUser().then(data => {
      this.setState({ user: data });
    });
  }
  fetchRequisicoes = () => {
    actions.requisicao.listaRequisicao().then(data => {
      this.setState({ requisicoes: data });
      console.log(data);
    });
  };

  handleClicked = row => {
    this.props.history.push({
      pathname: '/requisicoes/' + row.idRequisicao,
      state: { requisicao: row }
    });
  };
}

export default withRouter(Requisicoes);
