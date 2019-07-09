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
import UserRow from '../components/user-row';
import Titulo from '../../../components/titulo-pagina';

import actions from '../../../actions';
import Loading from '../../../components/loading';

class Usuarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return this.state.users === null ? (
      <Loading />
    ) : (
      <Grid item xs={12} style={{ marginTop: 90 }}>
        <Titulo>Usuarios</Titulo>
        <Grid item xs={12} style={{ padding: 10 }}>
          <Hidden xsDown>
            <Paper style={{ padding: 20 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="right">CPF</TableCell>
                    <TableCell align="right">Nome</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.users.map(row => {
                    return (
                      <UserRow
                        key={row.uid}
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

  fetchUsers() {
    actions.user.listaUsuario().then(data => {
      console.log(data, 'data');
      this.setState({ users: data });
    });
  }

  handleClicked = row => {
    this.props.history.push({
      pathname: '/invoices/' + row.uid,
      state: { loadedUser: row }
    });
  };
}

export default withRouter(Usuarios);
