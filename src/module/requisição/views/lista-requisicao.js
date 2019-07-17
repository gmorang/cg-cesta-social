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

class Requisicoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requisicoes: null
    };
  }

  componentDidMount() {
    actions.requisicao.listaRequisicao().then(data => {
      console.log(data);
      this.setState({ requisicoes: data });
    });
  }

  render() {
    return this.state.requisicoes === null ? (
      <Loading />
    ) : (
      <Grid item xs={12} style={{ marginTop: 90 }}>
        <Titulo>Requisicoes</Titulo>
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
                    console.log('row', row);
                    return (
                      <RequisicaoRow
                        key={row.idRequisicao}
                        row={row}
                        onClick={() => this.handleClicked(row)}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Hidden>
        </Grid>
      </Grid>
    );
  }

  fetchRequisicoes() {
    actions.requisicao.listaRequisicao().then(data => {
      console.log(data);
    });
  }

  handleClicked = row => {
    this.props.history.push({
      pathname: '/requisicoes/' + row.idRequisicao,
      state: { loadedInvoice: row }
    });
  };
}

export default withRouter(Requisicoes);
