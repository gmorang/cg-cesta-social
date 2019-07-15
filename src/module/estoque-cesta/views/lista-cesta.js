import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Hidden,
  Grid,
  Dialog
} from '@material-ui/core';
import Titulo from '../../../components/titulo-pagina';

import CestaRow from '../components/cesta-row';
import actions from '../../../actions';

import FAB from '../components/FAB';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ListaCesta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cestas: null,
      isVisible: false,
      idCesta: null
    };
  }

  componentDidMount() {
    this.fetchCestas();
  }

  componentWillUpdate() {
    this.fetchCestas();
  }

  _handleModal = () => {
    let { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  };

  adicionaCesta = () => {
    let idCesta = this.state.idCesta;
    console.log(idCesta);
    actions.ong.criaCesta(idCesta).then(this._handleModal);
  };

  render() {
    const { classes } = this.props;
    return this.state.cestas === null ? (
      <div />
    ) : (
      <Grid item xs={12} style={{ marginTop: 90 }}>
        <Titulo>Cestas</Titulo>
        <Grid item xs={12} style={{ padding: 10 }}>
          <Hidden xsDown>
            <Paper style={{ padding: 20 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Código da Cesta</TableCell>
                    <TableCell align="right">Data</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.cestas.map(row => {
                    return (
                      <CestaRow
                        key={row.idCesta}
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
        <FAB onClick={this._handleModal} />
        <Dialog
          fullWidth={true}
          open={this.state.isVisible}
          onClose={this._handleModal}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">Adicionar</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Deseja adicionar uma cesta ao estoque?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.adicionaCesta} color="primary">
              Adicionar
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
  }

  fetchCestas() {
    actions.ong.listaCesta().then(data => {
      console.log(data);
      this.setState({ cestas: data, idCesta: data.length++ });
    });
    console.log(this.state.idCesta);
  }
  handleClicked = row => {
    this.props.history.push({
      pathname: '/requisicoes/' + row.cesta.idCesta,
      state: { loadedInvoice: row }
    });
  };
}

export default ListaCesta;
